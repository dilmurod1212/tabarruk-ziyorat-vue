<template>
  <div class="relative top-1/2 -translate-y-2/4 z-20">
    <swiper
      :slidesPerView="1.2"
      :autoplay="{ delay: 1500, disableOnInteraction: false }"
      :centeredSlides="true"
      :spaceBetween="20"
      :loop="true"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        '1024': {
          slidesPerView: 2.8,
          spaceBetween: 30
        },
        '1280': {
          slidesPerView: 3.5,
          spaceBetween: 30
        }
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(el, idx) in countriess"
        :key="idx"
        class="flex justify-evenly"
        :virtualIndex="idx"
      >
        <div
          class="flex items-center gap-2 p-2 bg-white/10 bg-opacity-60 backdrop-blur-md rounded-md border border-white/10 text-white"
        >
          <img :src="el.image" alt="country" class="rounded-md" />
          <div class="flex flex-col gap-2">
            <p class="text-sm max-md:text-xs font-light opacity-70">{{ el.country }}</p>
            <h3 class="max-md:text-sm font-bold">{{ el.oldCountry }}</h3>
          </div>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { countriess } from '@/data/countrySlide.js'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../assets/main.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// const country = Countries
const modules = reactive([Autoplay, Pagination, Navigation])

onMounted(() => {
  console.log(countriess)
})
</script>
