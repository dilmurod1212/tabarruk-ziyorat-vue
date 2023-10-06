<template>
  <!-- <div class="py-24 fixed">
    <main class="container">
      <CInput type="text" placeholder="Enter keyword" v-model="input" :error="!input.length">
        <template #suffix>
          <span
            v-if="input.length > 3"
            @click="input = ''"
            class="text-white text-lg px-4 hover:text-red-500 transition duration-200 ease-in-out cursor-pointer"
          >
            X
          </span>
        </template>
      </CInput>
      <pre class="text-lg text-white"> input: {{ input }} </pre>
      <CSearch />
    </main>
  </div> -->
  <!-- <CountrySliderVue/> -->
  <Header />
  <About />
  <div class="container flex justify-between max-md:flex-col gap-4 max-lg:flex-wrap">
    <CCountryInfo
      v-for="(el, idx) in countryInfo"
      :key="idx"
      :img="el.img"
      :count="el.count"
      :info="el.info"
    />
  </div>
  <div class="container">
    <CTitle title="How many countries?" descr="All countries that we represent" divClass="mt-12" />
    <div class="flex max-md:grid max-md:grid-cols-2 gap-4 flex-wrap justify-center">
      <CCountriesFlag
        v-for="(country, idx) in flagArr"
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
import { ref, reactive } from 'vue'
import CInput from '@/components/Form/CInput.vue'
import CSearch from '@/components/CSearch.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import CountrySliderVue from '@/components/CountrySlider.vue'
import CCountriesFlag from '@/components/CCountriesFlag.vue'
import CCountryInfo from '@/components/CCountryInfo.vue'
import CTitle from '@/components/CTitle.vue'
const input = ref('')
const flagArr = reactive([
  { id: 1, flag: '/images/flags-svg/Uzbekistan.svg', country: 'Uzbekistan', destination: 32 },
  { id: 1, flag: '/images/flags-svg/Flag (1).svg', country: 'Türkiye', destination: 27 },
  { id: 2, flag: '/images/flags-svg/Flag (2).svg', country: 'Turkmenistan', destination: 27 },
  { id: 3, flag: '/images/flags-svg/Flag (3).svg', country: 'Azerbaijan', destination: 12 },
  { id: 4, flag: '/images/flags-svg/Flag (4).svg', country: 'Hungary', destination: 19 },
  { id: 5, flag: '/images/flags-svg/Flag (5).svg', country: 'Kazakhstan', destination: 21 },
  { id: 6, flag: '/images/flags-svg/Flag (6).svg', country: 'Kyrgyzstan', destination: 9 }
])

const countryInfo = reactive([
  { img: '/images/mosque/fa-solid_mosque.svg', info: 'Attractions', count: 142 },
  { img: '/images/mosque/Mask group.svg', info: 'Destinations', count: 254 },
  { img: '/images/mosque/Mask group (1).svg', info: 'Countries', count: 7 },
  { img: '/images/mosque/Mask group (2).svg', info: 'Religions', count: 3 }
])
</script>
