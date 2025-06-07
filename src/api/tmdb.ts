// api/tmdb.ts
export const config = {
  runtime: "edge",
};

const TMDB_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  if (!path) {
    return new Response(JSON.stringify({ error: "Missing path param" }), {
      status: 400,
    });
  }

  // Rebuild the URL
  const url = new URL(`${TMDB_BASE_URL}/${path}`);
  searchParams.forEach((value, key) => {
    if (key !== "path") url.searchParams.append(key, value);
  });

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_KEY}`,
    },
  });

  return new Response(await res.text(), {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
