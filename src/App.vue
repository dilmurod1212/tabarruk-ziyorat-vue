<template>
  <div class="bg-[#111325]">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import CountrySlider from './components/CountrySlider.vue'
import About from './components/About.vue'
</script>
<style>
.container {
  max-width: 90%;
  margin: 0 auto;
}
</style>
