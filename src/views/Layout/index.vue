<template>
    <AppTopNav />
    <AppHeader />
    <AppHeaderSticky></AppHeaderSticky>
    <!-- 主体内容部分 -->
    <main class="app-body">
        <Banner></Banner>
        <!-- 二级路由占位符的位置 -->
        <router-view></router-view>
    </main>
    <AppFooter />
</template>

<script setup lang="ts" name="Layout">
import AppTopNav from './component/app-topnav.vue'
import AppHeader from './component/app-header.vue'
import AppFooter from './component/app-footer.vue'
import AppHeaderSticky from './component/app-header-sticky.vue';
import Banner from '../home/index.vue'
</script>

<style scoped lang="less">
</style>
