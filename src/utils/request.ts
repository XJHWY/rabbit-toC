import axiso from "axios";
export const request = axiso.create({
  baseURL: "http://pcapi-xiaotuxian-front.itheima.net/",
  timeout: 5000,
});
