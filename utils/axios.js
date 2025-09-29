import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    "x-client": process.env.NEXT_PUBLIC_SUBSCRIPTION_ID,
    "x-access-token": process.env.NEXT_PUBLIC_X_ACCESS_TOKEN,
  },
});
