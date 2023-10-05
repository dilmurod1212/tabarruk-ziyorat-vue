<template>
  <ul class="flex gap-4 text-white max-md:hidden relative">
    <li class="hover:opacity-40 font-bold transition-all">
      <a href="#">About us</a>
    </li>
    <li class="transition-all" @click="showCountries" @focusout="state = false">
      <a href="#" class="hover:opacity-40 font-bold">Countries</a>
      <ul
        :class="[state ? 'block' : 'hidden']"
        class="absolute top-[100%] left-0 right-auto grid grid-cols-2 gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
      >
        <li
          v-for="(el, idx) in countries"
          :key="idx"
          class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer"
        >
          <img :src="el.flag" alt="" class="" />
          <div class="text-white">
            <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.country }}</h3>
            <p class="text-sm opacity-60">{{ el.destination }} destinations</p>
          </div>
        </li>
      </ul>
    </li>
    <li
      class="transition-all"
      @click="showReligion = !showReligion"
      @focusout="showReligion = false"
    >
      <a href="#" class="hover:opacity-40 font-bold">Religions</a>
      <ul
        :class="[showReligion ? 'block' : 'hidden']"
        class="absolute top-[100%] left-auto right-auto gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
      >
        <li
          v-for="(el, idx) in religions"
          :key="idx"
          class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer"
        >
          <img :src="el.img" alt="" class="" />
          <div class="text-white">
            <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.religion }}</h3>
            <p class="text-sm opacity-60">{{ el.destination }} destinations</p>
          </div>
        </li>
      </ul>
    </li>
    <li class="hover:opacity-40 font-bold transition-all">
      <a href="#">Heritage map</a>
    </li>
    <li class="hover:opacity-40 font-bold transition-all">
      <a href="#">Help</a>
    </li>
  </ul>
  <!-- <ul class="flex gap-4 text-white max-md:hidden relative">
    <li
      class="hover:opacity-40 font-bold transition-all"
      v-for="(nav, idx) in navLinks"
      :key="idx"
      :id="nav.id"
      @mouseenter="[nav.id == 2 ? showCountries() : '']"
      @mouseleave="[nav.id == 2 ? showCountries() : '']"
    >
      <a href="#">{{ nav.content }}</a>
    </li>
    <ul :class="[state ? 'fixed' : 'hidden']" class="absolute top-0 left-0">
      <li>england</li>
      <li>england</li>
      <li>england</li>
      <li>england</li>
      <li>england</li>
      <li>england</li>
    </ul>
  </ul> -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const state = ref(false)
const showReligion = ref(false)

const countries = reactive([
  {
    id: 1,
    flag: '/images/dropdown-flag-icons/Uzbekistan.svg',
    country: 'Uzbekistan',
    destination: 32
  },
  { id: 1, flag: '/images/dropdown-flag-icons/Turkiye.svg', country: 'Türkiye', destination: 27 },
  {
    id: 2,
    flag: '/images/dropdown-flag-icons/Turkmenistan.svg',
    country: 'Turkmenistan',
    destination: 27
  },
  {
    id: 3,
    flag: '/images/dropdown-flag-icons/Azerbaijan.svg',
    country: 'Azerbaijan',
    destination: 12
  },
  { id: 4, flag: '/images/dropdown-flag-icons//Hungary.svg', country: 'Hungary', destination: 19 },
  {
    id: 5,
    flag: '/images/dropdown-flag-icons/Kazakhstan.svg',
    country: 'Kazakhstan',
    destination: 21
  },
  {
    id: 6,
    flag: '/images/dropdown-flag-icons/Kyrgyzstan.svg',
    country: 'Kyrgyzstan',
    destination: 9
  }
])
const religions = reactive([
  { img: '/images/religions/Islam (1).svg', religion: 'Islam', destination: '32' },
  { img: '/images/religions/Islam.svg', religion: 'Islam', destination: '32' },
  { img: '/images/religions/Islam (2).svg', religion: 'Islam', destination: '32' }
])
const navLinks = reactive([
  { id: 1, content: 'About us' },
  { id: 2, content: 'Countries' },
  { id: 3, content: 'Religions' },
  { id: 4, content: 'Heritage map' },
  { id: 5, content: 'Help' }
])
const showCountries = () => {
  state.value = !state.value
  console.log('hover')
}
</script>

<style scoped></style>
