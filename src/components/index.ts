import XtsSkeleton from "./skeleton/index.vue";
import { App } from "vue";
export default {
  install(app: App) {
    app.component("XtsSkeleton", XtsSkeleton);
  },
};
