<template>
  <div>
    <div
      class="relative overflow-hidden w-full h-[200px] lg:h-[550px]"
      loading="false"
      data-v-fdb8a45c=""
    >
      <div class="w-full h-full flex -y-center relative">
        <div
          class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"
        >
          <img
            class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6] opacity-0"
            alt="banner-image"
            lazy="loaded"
            src="https://admin.tabarrukziyorat.com.uz/media/about_images/Xiva_shahri.jpg"
          />
        </div>
        <div
          class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"
        >
          <img
            class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]"
            alt="banner-image"
            lazy="loaded"
            src="/images/turcey.jpg"
          />
        </div>
        <div
          class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"
        >
          <img
            class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]"
            alt="banner-image"
            lazy="loaded"
            src="/images/baku.jpeg"
          />
        </div>
        <div
          class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"
        >
          <img
            class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]"
            alt="banner-image"
            lazy="loaded"
            src="https://admin.tabarrukziyorat.com.uz/media/about/registan.webp"
          />
        </div>
        <div
          class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1] border-r-[0px]"
        >
          <img
            class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6] opacity-0"
            alt="banner-image"
            lazy="loaded"
            src="https://admin.tabarrukziyorat.com.uz/media/about_images/azerbaijan.jpg"
          />
        </div>
        <img
          class="w-full h-full absolute left-0 max-w-[30%] object-cover"
          alt="banner-image"
          lazy="loaded"
          src="https://admin.tabarrukziyorat.com.uz/media/about_images/Xiva_shahri.jpg"
        /><img
          class="w-full h-full absolute right-0 max-w-[30%] object-cover"
          alt="banner-image"
          lazy="loaded"
          src="https://admin.tabarrukziyorat.com.uz/media/about_images/azerbaijan.jpg"
        />
        <div class="w-full h-full absolute inset-0 bg-dark/20 z-[2]"></div>
      </div>
    </div>
    <!-- <div class="w-full images flex gap-1 overflow-hidden">
      <div class="h-80 bg-red-400 w-full skew-first overflow-hidden">
        <img src="/images/turcey.jpg" alt="" class="skew-x-12 h-full w-[100%] object-cover" />
      </div>
      <div class="h-80 bg-yellow-400 w-full -skew-x-12 overflow-hidden relative">
        <img
          src="/images/turcey.jpg"
          alt=""
          class="skew-x-12 w-[150%] absolute bottom-0 top-0 h-full object-cover"
        />
      </div>
      <div
        id="myelement"
        class="h-80 bg-green-400 w-full -skew-x-12 bg-[url('/images/bukhara.jpeg')] bg-center bg-no-repeat bg-cover"
      ></div>
      <div
        class="h-80 bg-blue-400 w-full -skew-x-12 bg-[url('/images/hungary.jpg')] bg-center bg-no-repeat bg-cover"
      ></div>
      <div
        class="h-80 bg-white w-full -skew-x-12 bg-[url('/images/Image.png')] bg-center bg-no-repeat bg-cover"
      ></div>
    </div> -->
    <div class="text-white relative pt-[120px]">
      <div class="container">
        <h2 class="font-playfair text-4xl">About us</h2>
        <p class="text-lg max-lg:text-base max-md:text-sm mt-4">
          Explore the valuable, historical, and heritage places of Turkic countries through our
          curated selection of articles, photos, and videos. Discover the beauty of ancient ruins,
          stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary
          rulers, artists, and architects who left their mark on the region.
        </p>
      </div>
    </div>
    <div class="container flex justify-between max-md:flex-col gap-4 max-lg:flex-wrap my-6">
      <CCountryInfo
        v-for="(el, idx) in countryInfo"
        :key="idx"
        :img="el.img"
        :count="el.count"
        :info="el.info"
      />
    </div>

    <div class="py-6 max-md:pb-0 bg-white/[0.04] relative">
      <div class="container text-white">
        <h2 class="text-4xl max-md:text-3xl font-bold font-playfair">Our Mission</h2>
        <p class="w-2/4 max-md:w-full text-lg max-md:text-sm my-4">
          Explore the valuable, historical, and heritage places of Turkic countries through our
          curated selection of articles, photos, and videos. Discover the beauty of ancient ruins,
          stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary
          rulers, artists, and architects who left their mark on the region.
        </p>
        <div class="grid grid-col justify-start items-start gap-4">
          <p class="text-xl">Our supporters</p>
          <div
            class="flex items-center gap-4 bg-white/[0.04] border border-white/10 p-2 pr-8 rounded-lg"
          >
            <img
              src="/images/Emblem_of_the_Organization_of_Turkic_States.svg"
              alt=""
              class="w-[43px]"
            />
            <p class="font-playfair text-sm font-bold">
              Ministry of Tourism and Cultural Heritage of the Republic of Uzbekistan
            </p>
          </div>
          <div
            class="flex items-center gap-4 bg-white/[0.04] border border-white/10 p-2 pr-8 rounded-lg"
          >
            <img src="/images/golden-globe-svgrepo-com.svg" alt="" class="w-[43px]" />
            <p class="font-playfair text-xsm font-bold">Organization of Turkic states</p>
          </div>
        </div>
      </div>
      <img
        src="/images/mission.svg"
        alt=""
        class="absolute right-0 top-0 bottom-0 max-md:static max-md:mt-4 h-full"
      />
    </div>
    <div class="mt-[20px]">
      <CPresidentCards />
    </div>

    <CModalVideo :url="changeLink()" />
    <CContact :contactInfo="contactInfo" />
  </div>
</template>
<script setup lang="ts">
import CContact from '@/components/CContact.vue'
import CModalVideo from '@/components/CModalVideo.vue'
import CTitle from '@/components/CTitle.vue'
import CCountryInfo from '@/components/CardInfo/CCountryInfo.vue'
import CPresidentCards from '@/components/Cards/CPresidentCards.vue'
import { countryInfo } from '@/data/countryInfo.js'

import { ref, reactive } from 'vue'
const url = ref('https://www.youtube.com/embed/_fSoa491Mdw?si=nPpLnDaSGk-7p8yM')

// https://www.youtube.com/embed/2vK0fnOs8OA?si=nag4OnVOJMgAgVpO
// https://youtu.be/2vK0fnOs8OA?si=nag4OnVOJMgAgVpO

const changeLink = () => {
  if (url?.value.includes('be/')) {
    const newUrl = url.value.split('youtu.be/')

    return (url.value = 'https://www.youtube.com/embed/' + newUrl[1])
  } else {
    return url.value
  }
}

const contactInfo = reactive([
  {
    icon: 'fas fa-location-dot',
    iconName: 'Loaction',
    title: '107 B Amir Temur avenue, Tashkent, Uzbeksitan'
  },
  {
    icon: 'fas fa-envelope',
    iconName: 'Email address',
    title: 'tabarruk.ziyorat@info.uz'
  },
  {
    icon: 'fas fa-phone',
    iconName: 'Phone number',
    title: '+998 71 200 7007'
  }
])
</script>
<style>
.skew-first {
  transform: skewX(-12deg);
}

#myelement {
  position: relative;
  overflow: hidden;
}
#myelement::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background: url(background.png) 0 0 repeat;
  transform: rotate(30deg);
}
</style>
