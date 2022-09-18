<script lang="ts" setup name="XtxCarousel">
import { IBannerItem } from '@/types';
import { onMounted, onBeforeUnmount, ref } from 'vue';
const props = defineProps<{ slides: IBannerItem[], duration: number, autoplay: boolean }>()
const activeIndex = ref(0);
const next = () => {
    if (activeIndex.value >= props.slides.length - 1) {
        activeIndex.value = 0;
    } else {
        activeIndex.value++;
    }
}
const stop = () => {
    window.clearInterval(timer as number)
}
const prev = () => {
    if (activeIndex.value <= 0) {
        activeIndex.value = props.slides.length - 1;
    } else {
        activeIndex.value--;
    }
}
let timer: number | null = null
const play = () => {
    if (!props.autoplay) return
    timer = window.setInterval(() => {
        next()
    }, props.duration)
}
onMounted(() => {
    play()
})
onBeforeUnmount(() => {
    stop()
})


</script>

<template>
    <div class="xtx-carousel">
        <ul class="carousel-body">
            <li class="carousel-item" :class="{ fade: index === activeIndex }" v-for="(item, index) in slides"
                :key="item.id" @mouseenter="stop" @mouseleave="play">
                <RouterLink to="/">
                    <img :src="item.imgUrl" alt="" />
                </RouterLink>
            </li>
        </ul>
        <a href="javascript:;" class="carousel-btn prev" @click="prev"><i class="iconfont icon-angle-left"></i></a>
        <a href="javascript:;" class="carousel-btn next" @click="next"><i class="iconfont icon-angle-right"></i></a>
        <div class="carousel-indicator">
            <span :class="{ active: index === activeIndex }" v-for="(item, index) in slides" :key="item.id"></span>
        </div>
    </div>
</template>

<style scoped lang="less">
.xtx-carousel {
    width: 100%;
    height: 100%;
    min-width: 300px;
    min-height: 150px;
    position: relative;

    .carousel {
        &-body {
            width: 100%;
            height: 100%;
        }

        &-item {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            transition: opacity 0.5s linear;

            &.fade {
                opacity: 1;
                z-index: 1;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        &-indicator {
            position: absolute;
            left: 0;
            bottom: 20px;
            z-index: 2;
            width: 100%;
            text-align: center;

            span {
                display: inline-block;
                width: 12px;
                height: 12px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 50%;
                cursor: pointer;

                ~span {
                    margin-left: 12px;
                }

                &.active {
                    background: #fff;
                }
            }
        }

        &-btn {
            width: 44px;
            height: 44px;
            background: rgba(0, 0, 0, 0.2);
            color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 228px;
            z-index: 2;
            text-align: center;
            line-height: 44px;
            opacity: 0;
            transition: all 0.5s;

            &.prev {
                left: 20px;
            }

            &.next {
                right: 20px;
            }
        }
    }

    &:hover {
        .carousel-btn {
            opacity: 1;
        }
    }
}
</style>