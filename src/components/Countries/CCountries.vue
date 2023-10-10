<template>
  <div class="container">
    <CTitle title="How many countries?" descr="All countries that we represent" divClass="mt-12" />
    <div class="flex max-md:grid max-md:grid-cols-2 gap-4 flex-wrap justify-evenly">
      <CountriesItem
        v-for="(country, idx) in countries"
        :key="idx"
        :id="country.id"
        :flag="country.flag"
        :destination="country.destination"
        :country="country.country"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CountriesItem from './CountriesItem.vue'
import CTitle from '../CTitle.vue'
const countries = reactive([
  { id: 1, flag: '/images/flags-svg/Uzbekistan.svg', country: 'Uzbekistan', destination: 32 },
  { id: 1, flag: '/images/flags-svg/Flag (1).svg', country: 'Türkiye', destination: 27 },
  { id: 2, flag: '/images/flags-svg/Flag (2).svg', country: 'Turkmenistan', destination: 27 },
  { id: 3, flag: '/images/flags-svg/Flag (3).svg', country: 'Azerbaijan', destination: 12 },
  { id: 4, flag: '/images/flags-svg/Flag (4).svg', country: 'Hungary', destination: 19 },
  { id: 5, flag: '/images/flags-svg/Flag (5).svg', country: 'Kazakhstan', destination: 21 },
  { id: 6, flag: '/images/flags-svg/Flag (6).svg', country: 'Kyrgyzstan', destination: 9 }
])
</script>

<style scoped></style>
