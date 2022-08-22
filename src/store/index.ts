import { useCategory } from "./modules/category";
// 解构以后失去响应式，用函数导出的方式
export default function useStore() {
  return {
    category: useCategory(),
  };
}
