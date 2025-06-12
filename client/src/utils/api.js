// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://fasco-shopping-production.up.railway.app/api", // backend ka base URL
});

export default API;
