import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.112:8888",
  params: {},
});

export default instance;
