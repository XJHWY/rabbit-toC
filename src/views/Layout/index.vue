<template>
    <AppTopNav />
    <AppHeader />
    <AppHeaderSticky></AppHeaderSticky>
    <!-- 主体内容部分 -->
    <main class="app-body">
        <!-- 二级路由占位符的位置 -->
        <router-view></router-view>
        <Banner></Banner>
    </main>
    <AppFooter />
</template>

<script setup lang="ts" name="Layout">
import AppTopNav from './component/app-topnav.vue'
import AppHeader from './component/app-header.vue'
import AppFooter from './component/app-footer.vue'
import AppHeaderSticky from './component/app-header-sticky.vue';
import Banner from '../home/index.vue'
const arr = [1, 2, 3, 4, 5]
const a = arr.includes(2, 1)
console.log(a);

</script>

<style scoped lang="less">
</style>
