<template>
  <div class="about min-h-screen">
    <RouterLink to="/" style="font-size: 24px" class="text-white"> Home page</RouterLink>
    <div class="flex justify-between gap-4">
      <NewsCardItem />
      <NewsCardItem />
      <NewsCardItem />
      <NewsCardItem />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import NewsCardItem from '@/components/News/NewsCardItem.vue'
</script>
<style></style>
