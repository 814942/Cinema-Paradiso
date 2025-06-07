import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_KEY}`,
  },
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (!error.response) {
      throw new Error(error.message);
    }

    return error.response;
  }
);

export { axios };
