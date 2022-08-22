<template>
    <div class="category">分类组件</div> {{ id }}
</template>

<script lang="ts" name="TopCategory" setup>
const props = defineProps<{ id: number | string }>()
</script>

<style>
</style>