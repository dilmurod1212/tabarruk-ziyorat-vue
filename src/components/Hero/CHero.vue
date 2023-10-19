<template>
  <div
    class="hero relative top-0 left-0 h-[100vh] z-10 max-md:h-auto flex items-center overflow-hidden"
  >
    <img src="/images/vectors/Vector (7).svg" alt="" class="absolute top-[15%] left-0 w-1/2" />
    <div
      class="container text-center h-[75vh] flex flex-col items-center justify-center text-white mt-8"
    >
      <p><i class="fa-solid fa-location-dot mx-1"></i>Samarkand, Uzbekistan</p>
      <h1 class="text-8xl max-md:text-5xl capitalize font-playfair mb-4 max-md:mb-2">
        registan square
      </h1>
      <p class="descr w-4/6 max-md:w-4/5 max-md:text-base my-3">
        Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate
        madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th
        century.
      </p>
      <Button type="button" btnClass="" variant="red"
        >Explore <i class="fas fa-arrow-right"></i
      ></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../Form/Button.vue'
</script>

<style scoped>
.hero {
  background: linear-gradient(
      180deg,
      #07091c -4.12%,
      rgba(7, 9, 28, 0.6) 49.39%,
      rgba(7, 9, 28, 0.2) 85.78%,
      #07091c 100%
    ),
    url('/images/Image.png');
  background-position: center;
  background-color: red;
}
</style>
