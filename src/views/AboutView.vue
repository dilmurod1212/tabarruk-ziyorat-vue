<template>
  <div>
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
    <!-- start video player -->

    <div
      class="video-player min-h-[500px] max-lg:min-h-[400px] max-md:min-h-[300px] flex justify-center items-center flex-col relative"
    >
      <div class="container">
        <h2
          class="font-playfair text-4xl max-md:text-2xl text-center text-white absolute left-2/4 -translate-x-[50%] top-10"
        >
          Promo Video about Tabarruk ziyorat
        </h2>
      </div>
      <div
        @click="showModal"
        class="text-white group cursor-pointer w-[100px] h-[100px] max-md:h-[60px] max-md:w-[60px] bg-red-600 flex justify-center items-center rounded-full"
      >
        <i class="fas fa-play group-hover:scale-110 transition-all text-4xl max-md:text-2xl"></i>
      </div>
    </div>
    <div>
      <Modal size="5xl" v-if="isShowModal" @close="closeModal" color="green" class="">
        <template #header>
          <div class="flex items-center text-lg">
            <h2 class="max-md:text-sm max-lg:text-base text-xl">
              Turkiy mamlakatlarning qimmatli, tarixiy va merosi joylarini o'rganing
            </h2>
          </div>
        </template>
        <template #body>
          <div class="min-h-[250px] h-full">
            <iframe
              width="100%"
              height="250px"
              data-v-fdb8a45c=""
              src="https://www.youtube.com/embed/jpo0fX1IQSw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </template>
      </Modal>
    </div>
    <!-- end video player -->
    <!-- start contact section -->
    <div class="container">
      <div class="flex justify-between max-md:flex-col items-center max-md:items-start">
        <div class="text-white flex flex-col gap-4 py-6">
          <h2 class="text-4xl font-playfair">Contacts</h2>
          <div>
            <p class="max-md:text-sm text-white/60 font-light mb-1">
              <i class="fas fa-voicemail"></i>Email address
            </p>
            <h4 class="text-xl font-bold">tabarruk.ziyorat@info.uz</h4>
          </div>
          <div>
            <p class="max-md:text-sm text-white/60 font-light mb-1">
              <i class="fas fa-voicemail"></i>Email address
            </p>
            <h4 class="text-xl font-bold">tabarruk.ziyorat@info.uz</h4>
          </div>
          <div>
            <p class="max-md:text-sm text-white/60 font-light mb-1">
              <i class="fas fa-voicemail"></i>Email address
            </p>
            <h4 class="text-xl font-bold">tabarruk.ziyorat@info.uz</h4>
          </div>
        </div>
        <div class="h-[250px] w-[600px] max-lg:w-[400px] max-md:w-full">
          <iframe
            class="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.108618813058!2d69.31345292164745!3d41.32000820980603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef58d8193b3cd%3A0xd6d0b321d0ea5cd8!2sMehmonxona!5e0!3m2!1suz!2s!4v1697805473555!5m2!1suz!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CTitle from '@/components/CTitle.vue'
import CCountryInfo from '@/components/CardInfo/CCountryInfo.vue'
import CPresidentCards from '@/components/Cards/CPresidentCards.vue'
import { countryInfo } from '@/data/countryInfo.js'

import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
  document.body.style.overflowY = 'scroll'
}
function showModal() {
  isShowModal.value = true
  document.body.style.overflowY = 'hidden'
}
</script>
<style>
.video-player {
  background: linear-gradient(
      180deg,
      #07091c -4.12%,
      rgba(7, 9, 28, 0.6) 49.39%,
      rgba(7, 9, 28, 0.2) 85.78%,
      #07091c 100%
    ),
    url('/images/Image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.modal {
  background-color: green;
}
</style>
