<template>
  <CHero />
  <img src="/images/vectors/Vector(6).svg" alt="" class="absolute left-0 top-2/4 z-0" />
  <CountrySlider />
  <div class="mx-auto">
    <About />
  </div>

  <CCountryInfo :options="countryInfo" wrapper-class="" />
  <CCountries wrapper-class="" />
  <CReligions wrapper-class="" />
  <CNews :news="news" />
  <CInstagram :options="instagram" wrapper-class="" />
  <div class="container grid grid-cols-2 max-md:grid-cols-1 gap-4 py-8">
    <CAccordion
      v-for="(el, idx) in Accordion"
      :key="idx"
      :descr="el.descr"
      :icon="el.icon"
      :id="el.id"
      :show="activeItem === el.id"
      :title="el.title"
      @click="showItem(el.id)"
    />
  </div>
  <CPartners />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import About from '@/components/About/About.vue'
import CountrySlider from '@/components/CountrySlider.vue'
import CCountries from '@/components/Countries/CCountries.vue'
import CCountryInfo from '@/components/CardInfo/CCountryInfo.vue'
import CReligions from '@/components/Religions/CReligions.vue'
import CNews from '@/components/News/CNews.vue'
import CAccordion from '@/components/Accordion/CAccordion.vue'
import CPartners from '@/components/Partners/CPartners.vue'
import news from '@/data/newsCard.js'
import { Accordion } from '@/data/accordion.js'
import { countryInfo } from '@/data/countryInfo.js'
import { instagram } from '@/data/instagram.js'
import CHero from '@/components/Hero/CHero.vue'
import CInstagram from '@/components/Instagram/CInstagram.vue'

const activeItem = ref(0 || null)

const showItem = (id) => {
  if (activeItem.value == id) {
    activeItem.value = null
  } else {
    activeItem.value = id
  }
}
</script>
