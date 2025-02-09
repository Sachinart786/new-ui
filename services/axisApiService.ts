import { createAxiosClient } from "./axiosClient";
import { getCookie } from "cookies-next";
import { APIURL } from "@/config";

function getCurrentAccessToken() {
  return getCookie("token");
}

export const client = createAxiosClient({
  options: {
    baseURL: APIURL,
    timeout: 300000,
    headers: {
      "Content-Type": "application/json",
    },
  },
  getCurrentAccessToken,
});

export default client;
