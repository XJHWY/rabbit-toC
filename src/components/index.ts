import XtsSkeleton from "./skeleton/index.vue";
import Carousel from "./carousel/index.vue";
import More from "./more/index.vue";
import defaultImage from "@/assets/images/logo.png";
import { App } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
export default {
  install(app: App) {
    app.component("XtsSkeleton", XtsSkeleton);
    app.component(Carousel.name, Carousel);
    app.component(More.name, More);
    // 自定义指令
    // <img :src="item.src" alt="" />
    // <img v-lazy="item.src" alt="" />
    app.directive("lazy", {
      mounted(el: HTMLImageElement, { value }) {
        // 图片懒加载的逻辑
        // 参数一 回调函数
        // 参数二 可选的配置
        const { stop } = useIntersectionObserver(
          el,
          // isIntersecting 相交部分 这段代码的意思就是如果相交了，就把target的value值设置为图片绝对地址
          ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
              // 停止监听 节省性能
              stop();
              // 给el设置src属性
              // value = '123.png'
              el.src = value;
              /// 如果图片加载失败显示默认额图片
              el.onerror = function () {
                el.src = defaultImage;
              };
            }
          }
        );
      },
    });
  },
};
