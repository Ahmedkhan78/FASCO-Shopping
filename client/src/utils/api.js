// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://fasco-shopping-production.up.railway.app/api",
  withCredentials: true, // 👈 Required for cookie/session headers
});

export default API;
