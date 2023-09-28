<template>
  <div class="font-montserrat bg-black">
    <!-- <RouterView /> -->
    <Header />

    <CountrySlider />
    <About/>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import CountrySlider from './components/CountrySlider.vue'
import About from './components/About.vue';
</script>
<style>
.container {
  max-width: 90%;
  margin: 0 auto;
}
</style>
