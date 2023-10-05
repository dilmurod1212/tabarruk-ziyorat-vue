<template>
  <div class="container">
    <div class="title">
      <h2 class="text-white font-playfair text-4xl my-4">About us</h2>
    </div>
    <div class="flex gap-2 items-center max-md:flex-col max-md:items-start py-2">
      <div class="text-white w-4/6 max-md:w-full">
        <p class="w-4/5 max-md:w-full">
          Explore the valuable, historical, and heritage places of Turkic countries through our
          curated selection of articles, photos, and videos. Discover the beauty of ancient ruins,
          stunning mosques, medieval fortresses, and intricate tilework.
        </p>
        <div class="brands my-4">
          <h4>Our supporters</h4>
          <div class="flex my-2 gap-2">
            <img src="../../public/images/Emblem_of_the_Organization_of_Turkic_States.svg" alt="" />
            <img src="../../public/images/golden-globe-svgrepo-com.svg" alt="" />
          </div>
        </div>
        <div class="btn-group flex">
          <Button class="" variant="red">Explore <i class="fas fa-globe"></i></Button>
          <Button class="mx-2 " variant="dark"
            >More about us <i class="fas fa-arrow-right"></i
          ></Button>
        </div>
      </div>
      <CHoverCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Form/Button.vue'

import CHoverCard from './CHoverCard.vue'
</script>

<style scoped></style>
