import axios from "axios";

const instance = axios.create({
  baseURL: "https://ai-stock-analyzer-stocker.vercel.app/api",
  timeout: 10000000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
