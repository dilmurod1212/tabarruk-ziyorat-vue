<template>
  <ul class="flex gap-4 text-white max-lg:hidden relative" :class="navClass">
    <li class="hover:opacity-40 font-bold transition-all">
      <router-link to="/about">About us</router-link>
    </li>
    <li @click="showCountries()" @focusout="state = false">
      <a href="#" class="hover:opacity-40 font-bold">Countries</a>
      <CDropdown v-if="state" :religion="dropdownCountries" />
    </li>
    <li
      class="transition-all"
      @click="showReligion = !showReligion"
      @focusout="showReligion = false"
    >
      <a href="#" class="hover:opacity-40 font-bold">Religions</a>
      <CDropdown v-if="showReligion" :religion="religions" />
    </li>
    <li class="hover:opacity-40 font-bold transition-all">
      <a href="#">Heritage map</a>
    </li>
    <li class="hover:opacity-40 font-bold transition-all">
      <a href="#">Help</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const state = ref(false)
const showReligion = ref(false)

import { dropdownCountries, religions } from '@/data/dropdownCountries.js'
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

<style></style>
