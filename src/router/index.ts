// 解构出hash模式下的路由
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
const router = createRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: () => import("@/views/home/index.vue"),
        },
        {
          path: "category/:id",
          component: () => import("@/views/category/index.vue"),
          props: true,
        },
        {
          path: "category/sub:id",
          component: () => import("@/views/category/sub.vue"),
          props: true,
        },
      ],
    },
  ],
  // hash模式下的路由有#号 需要后台支持
  history: createWebHashHistory(),
});
export default router;
