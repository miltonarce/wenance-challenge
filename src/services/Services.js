import axios from "axios";

const URL_BASE = "https://swapi.dev/api";

const axiosInstance = axios.create({
  baseURL: URL_BASE,
  mode: "cors"
});

export default {
  people: {
    fetch: link => axiosInstance.get(`/people`),
  }
};