import Axios from "axios";

const axios = Axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_KEY}`,
    "Access-Control-Allow-Credentials": true,
  },
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    // if (error.response.status === 401) logout();
    if (!error.response) {
      throw new Error(error.message);
    }

    return error.response;
  }
);

export { axios };
