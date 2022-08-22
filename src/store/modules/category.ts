import { defineStore } from "pinia";
import { request } from "@/utils/request";
import { IApiRes, ICategoryItem, IGood, IChild } from "@/types/index";
export const useCategory = defineStore("category", {
  state: () => ({
    list: [] as ICategoryItem[],
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<IApiRes<ICategoryItem[]>>(
        "/home/category/head"
      );
      console.log(res);
      res.data.result.forEach((item) => (item.open = false));
      this.list = res.data.result;
    },
    show(id: string) {
      const category = this.list.find((item) => item.id === id);
      category!.open = true;
    },
    hide(id: string) {
      const category = this.list.find((item) => item.id === id);
      category!.open = false;
    },
  },
});
