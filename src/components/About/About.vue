<template>
  <div class="container z-20">
    <div class="title ">
      <h2 class="text-white font-playfair text-4xl my-4">About us</h2>
    </div>
    <div class="flex gap-4 items-center max-lg:flex-col max-md:items-start py-2">
      <div class="text-white w-4/5 max-lg:w-full z-20">
        <p class="max-md:w-full">
          Explore the valuable, historical, and heritage places of Turkic countries through our
          curated selection of articles, photos, and videos. Discover the beauty of ancient ruins,
          stunning mosques, medieval fortresses, and intricate tilework.
        </p>
        <div class="brands my-4">
          <h4>Our supporters</h4>
          <div class="flex my-2 gap-2">
            <img src="/images/Emblem_of_the_Organization_of_Turkic_States.svg" alt="" />
            <img src="/images/golden-globe-svgrepo-com.svg" alt="" />
          </div>
        </div>
        <div class="btn-group flex">
          <Button class="" variant="red">Explore <i class="fas fa-globe"></i></Button>
          <Button class="mx-2" variant="dark"
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
