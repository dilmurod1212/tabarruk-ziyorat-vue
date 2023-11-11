<template>
  <div class="container">
    <h2 class="text-white text-3xl font-playfair capitalize mt-16">news</h2>
    <div class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 mt-4">
      <router-link
        v-for="(item, idx) in newsData"
        :key="idx"
        :to="{ name: 'NewsSingle', params: { id: item.id } }"
      >
        <NewsCardItem :item="item" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NewsCardItem from '@/components/News/NewsCardItem.vue'
import news from '@/data/newsCard.js'
const newsData = ref(news)
</script>

<style scoped></style>
