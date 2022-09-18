import axios from "axios";
export const request = axios.create({
  baseURL: "http://apipc-xiaotuxian-front.itheima.net/",
  timeout: 5000,
});
