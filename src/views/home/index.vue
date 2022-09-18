<template>
    <div class="page-home">
        <div class="home-entry">
            <div class="container">
                <!-- 左侧分类 -->
                <HomeCategory />
                <!-- banner轮播图 -->
                <HomeBanner />
            </div>
        </div>
        <!-- 新鲜好物 -->
        <HomeNew></HomeNew>
        <!-- 人气推荐 -->
        <HomeHot></HomeHot>
        <HomeBrand></HomeBrand>
        <HomeProduct></HomeProduct>
    </div>
</template>

<script lang="ts" setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
</script>

<style>
</style>