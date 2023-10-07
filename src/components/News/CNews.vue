<template>
  <div class="container">
    <CTitle title="How many countries?" descr="All countries that we represent" divClass="mt-12" />
    <div class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
      <NewsCardItem v-for="(item, idx) in news" :key="idx" :item="item" />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import CTitle from '../CTitle.vue'
import NewsCardItem from '@/components/News/NewsCardItem.vue'
import { onMounted } from 'vue'

// interface Props  {
//     id: number
//     descr: string
//     title: string
//     img: string

// }
defineProps({
  news: Array
})
onMounted(() => {
  console.log(news)
})
</script>

<style scoped></style>
