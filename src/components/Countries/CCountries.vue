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
import CountriesItem from './CountriesItem.vue'
import CTitle from '../CTitle.vue'
import { countries } from '@/data/countries.js'
</script>

<style scoped></style>
