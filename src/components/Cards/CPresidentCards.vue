<template>
  <div class="container">
    <CTitle title="Statements" descr="All countries that we represent" />
    <swiper
      :slidesPerView="1.2"
      :centeredSlides="true"
      :grabCursor="true"
      :spaceBetween="40"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 30
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper py-10"
    >
      <swiper-slide v-for="(el, idx) in info" :key="idx" v-slot="{ isActive }" class="py-12">
        <div
          class="relative flex flex-col justify-center items-center text-center bg-white/20 border border-white/20 rounded-2xl"
          :class="{ 'scale-110': isActive }"
        >
          <img
            :src="el.img"
            alt=""
            class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <div class="p-4 my-4 mt-16 text-white">
            <h3 class="text-[#E54545]">{{ el.name }}</h3>
            <h3 class="opacity-80 font-light text-sm">{{ el.title }}</h3>
            <p class="font-bold text-sm mt-4">​​{{ el.descr }}</p>
          </div>
          <img
            src="/images/president/president-b-icon.png"
            alt=""
            class="absolute right-0 bottom-0"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import CTitle from '../CTitle.vue'

const modules = reactive([EffectCoverflow, Pagination, Navigation])
const info = reactive([
  {
    id: 1,
    img: '/images/president/Imagemirziyoyev.png',
    name: 'Shavkat Mirziyoyev',
    title: 'President of  Uzbekistan',
    descr: '​​To sit in love with the achievements is the greatest cave on the path of progress.'
  },
  {
    id: 1,
    img: '/images/president/Imagemirziyoyev.png',
    name: 'Shavkat Mirziyoyev',
    title: 'President of  Uzbekistan',
    descr: '​​To sit in love with the achievements is the greatest cave on the path of progress.'
  },
  {
    id: 1,
    img: '/images/president/Imagemirziyoyev.png',
    name: 'Shavkat Mirziyoyev',
    title: 'President of  Uzbekistan',
    descr: '​​To sit in love with the achievements is the greatest cave on the path of progress.'
  },
  {
    id: 1,
    img: '/images/president/Imagemirziyoyev.png',
    name: 'Shavkat Mirziyoyev',
    title: 'President of  Uzbekistan',
    descr: '​​To sit in love with the achievements is the greatest cave on the path of progress.'
  }
])
</script>
<style>
.mySwiper {
  padding: 50px 0;
}
</style>
