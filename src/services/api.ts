import axios from "axios";

const api = axios.create({
  baseURL: "https://powerful-harbor-68671.herokuapp.com/",
  // baseURL: "http://localhost:3333",
});

export default api;
