import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
