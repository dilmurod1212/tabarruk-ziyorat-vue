<template>
  <ul class="flex gap-4 text-white max-lg:hidden relative" :class="navClass">
    <li class="font-bold">
      <router-link to="/about">About us</router-link>
    </li>
    <li @click="showCountries()" @focusout="state = false">
      <a href="#" class="hover:opacity-40 font-bold" :class="{ active: state }">Countries</a>
      <CDropdown v-if="state" :dropData="dropdownCountries" className="left-0" />
    </li>
    <li @click="showReligion = !showReligion" @focusout="showReligion = false">
      <a href="#" class="hover:opacity-40 font-bold" :class="{ active: showReligion }">Religions</a>
      <CDropdown v-if="showReligion" :dropData="religions" />
    </li>
    <li class="font-bold transition-all">
      <a href="#">Heritage map</a>
    </li>
    <li class="font-bold transition-all">
      <a href="#">Help</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const state = ref(false)
const showReligion = ref(false)

import { dropdownCountries, religions } from '@/data/dropdown.js'
import CDropdown from './CDropdown.vue'
defineProps({ navClass: String })
const navLinks = reactive([
  { id: 1, content: 'About us' },
  { id: 2, content: 'Countries' },
  { id: 3, content: 'Religions' },
  { id: 4, content: 'Heritage map' },
  { id: 5, content: 'Help' }
])
const showCountries = () => {
  state.value = !state.value
}
</script>

<style scoped>
ul li a:hover {
  opacity: 0.4;
  transition: all 0.3s;
}
.router-link-exact-active,
.active {
  opacity: 0.4;
}
</style>
