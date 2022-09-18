import { defineStore } from "pinia";
import { request } from "@/utils/request";
import {
  IApiRes,
  IBannerItem,
  INewItem,
  HotGoods,
  IBrand,
  IGood,
} from "@/types";
export const useHomeStore = defineStore("home", {
  state: () => ({
    bannerList: [] as IBannerItem[],
    newList: [] as INewItem[],
    Hotlist: [] as HotGoods[],
    BrandList: [] as IBrand[],
    PorductList: [] as IGood[],
  }),
  getters: {},
  actions: {
    async getBannerList() {
      const res = await request.get<IApiRes<IBannerItem[]>>("/home/banner");
      this.bannerList = res.data.result;
    },
    async getNewList() {
      const res = await request.get<IApiRes<INewItem[]>>("home/new");
      this.newList = res.data.result;
    },
    async getHotList() {
      const res = await request.get<IApiRes<HotGoods[]>>("home/goods");
      this.Hotlist = res.data.result;
    },
    async getBrandList() {
      const res = await request.get<IApiRes<IBrand[]>>("/home/brand");
      this.BrandList = res.data.result;
    },
    async getProductList() {
      const res = await request.get<IApiRes<IGood[]>>("/home/goods");
      this.PorductList = res.data.result;
      console.log(res.data.result);
    },
  },
});
