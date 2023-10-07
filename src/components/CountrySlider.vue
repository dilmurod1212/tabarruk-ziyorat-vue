<template>
  <div class="flex gap-3"></div>
  <swiper
    :slidesPerView="3.5"
    :centeredSlides="true"
    :spaceBetween="20"
    :grabCursor="true"
    :loop="true"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(el, idx) in 7" :key="idx" class="flex justify-evenly" :virtualIndex="idx">
      <div
        class="flex items-center gap-2 p-2 bg-[#191f53] bg-opacity-60 backdrop-blur-md rounded-md my-2 border-2 border-[#191f53] text-white"
      >
        <img src="/images/hungary.jpg" alt="country" class="rounded-md" />
        <div class="flex flex-col gap-2">
          <p class="text-sm font-light opacity-70">{{ el.country }}</p>
          <h3 class="text-lg font-bold">{{ el.oldCountry }}</h3>
        </div>
      </div></swiper-slide
    >
  </swiper>
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
  console.log(countriess);
  
})
</script>


