// 解构出hash模式下的路由
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  routes: [],
  // hash模式下的路由有#号 需要后台支持
  history: createWebHashHistory(),
});
export default router;
