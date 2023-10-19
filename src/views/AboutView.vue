<template>
  <div class="text-white relative pt-[120px]">
    <div class="container">
      <h2 class="font-playfair text-4xl">About us</h2>
      <p class="text-lg mt-4">
        Explore the valuable, historical, and heritage places of Turkic countries through our
        curated selection of articles, photos, and videos. Discover the beauty of ancient ruins,
        stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary
        rulers, artists, and architects who left their mark on the region.
      </p>
    </div>
  </div>
  <div class="container flex justify-between max-md:flex-col gap-4 max-lg:flex-wrap mt-6">
    <CCountryInfo
      v-for="(el, idx) in countryInfo"
      :key="idx"
      :img="el.img"
      :count="el.count"
      :info="el.info"
    />
  </div>
  <div class="mt-[20px]">
    <CPresidentCards />
  </div>
</template>
<script setup lang="ts">
import CTitle from '@/components/CTitle.vue'
import CCountryInfo from '@/components/CardInfo/CCountryInfo.vue'
import CPresidentCards from '@/components/Cards/CPresidentCards.vue'
import { countryInfo } from '@/data/countryInfo.js'
</script>
<style></style>
