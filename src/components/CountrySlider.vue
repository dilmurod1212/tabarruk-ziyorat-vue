<template>
  <div class="my-4">
    <swiper
      :slidesPerView="1.2"
      :autoplay="{ delay: 1500, disableOnInteraction: false }"
      :centeredSlides="true"
      :spaceBetween="20"
      :loop="true"
      :breakpoints="{
        '640': {
          slidesPerView: 1.4,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 2.4,
          spaceBetween: 20
        },
        '1024': {
          slidesPerView: 3.2,
          spaceBetween: 30
        },
        '1280': {
          slidesPerView: 4,
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
          class="flex items-center gap-2 p-2 bg-[#191f53] bg-opacity-60 backdrop-blur-md rounded-md border-2 border-[#191f53] text-white"
        >
          <img
            src="/images/hungary.jpg"
            alt="country"
            class="rounded-md w-[100px] max-md:w-[80px]"
          />
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
