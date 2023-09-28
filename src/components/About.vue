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
          <Button class="bg-[#E54545]">Explore <i class="fas fa-globe"></i></Button>
          <Button class="bg-[#2C2E3E] mx-2"
            >More about us <i class="fas fa-arrow-right"></i
          ></Button>
        </div>
      </div>
      <div class="wrapper max-md:w-full">
        <div class="images flex gap-2">
          <div
            v-for="(el, idx) in panels"
            :key="idx"
            class="panel bg-[url('./images/baku.jpeg')]"
            :class="[el.class, el.isActive ? ' active' : '']"
            @click="() => actived(el.id)"
          >
            <h3>{{ el.text }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/UiComponent/Button.vue'

import { reactive } from 'vue'
const panels = reactive([
  {
    text: 'Baku, Azerbaijan',
    class: "bg-[url('/images/baku.jpeg')] ",
    isActive: false,
    id: 1
  },
  { text: 'Bakuu, Azerbaijan', class: "bg-[url('/images/bukhara.jpeg')]", isActive: false, id: 2 },
  { text: 'Bakuuu, Azerbaijan', class: "bg-[url('/images/turcey.jpg')]", isActive: true, id: 3 },
  { text: 'Bakuuuu, Azerbaijan', class: "bg-[url('/images/hungary.jpg')]", isActive: false, id: 4 }
])

const actived = (id) => {
  panels.forEach((item) => {
    item.isActive = false
    console.log(item)
    if (item.id === id) {
      // item.class = ' active'
      item.isActive = true
      console.log(item)
    }
  })
}
</script>

<style scoped></style>
