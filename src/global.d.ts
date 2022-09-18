import XtxSkeleton from "@/components/XtxSkeleton/index.vue";
import XtxMore from "@/components/more/index.vue";
declare module "vue" {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton;
    XtxMore: typeof XtxMore;
  }
}
export {};
