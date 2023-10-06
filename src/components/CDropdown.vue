<template>
  <ul
    :class="[state ? 'block' : 'hidden']"
    class="absolute top-[100%] left-0 right-auto grid grid-cols-2 gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
  >
    <li
      v-for="(el, idx) in dropdownCountries"
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
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { dropdownCountries } from '@/data/dropdownCountries.js'
const state = ref(false)
const showReligion = ref(false)

const religions = reactive([
  { img: '/images/religions/Islam (1).svg', religion: 'Islam', destination: '32' },
  { img: '/images/religions/Islam.svg', religion: 'Christianity', destination: '24' },
  { img: '/images/religions/Islam (2).svg', religion: 'Buddism', destination: '19' }
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
