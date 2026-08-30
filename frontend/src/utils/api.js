import axios from "axios";
import qs from "qs";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});

export default API;