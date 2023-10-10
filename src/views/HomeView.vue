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
  <Header />
  <!-- <CountrySlider /> -->
  <div class="mx-auto">
    <About />
  </div>

  <div class="container flex justify-between max-md:flex-col gap-4 max-lg:flex-wrap">
    <CCountryInfo
      v-for="(el, idx) in countryInfo"
      :key="idx"
      :img="el.img"
      :count="el.count"
      :info="el.info"
    />
  </div>
  <CCountries />
  <CReligions />
  <CNews :news="news" />
  <div class="container grid grid-cols-2 max-md:grid-cols-1 gap-4 py-8">
    <CAccordion
      v-for="(el, idx) in accordions"
      :key="idx"
      :descr="el.descr"
      :icon="el.icon"
      :id="el.id"
      :show="activeItem === el.id"
      :title="el.title"
      @click="showItem(el.id, el.show)"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import About from '@/components/About/About.vue'
// import CountrySlider from '@/components/CountrySlider.vue'
import CCountries from '@/components/Countries/CCountries.vue'
import CCountryInfo from '@/components/CardInfo/CCountryInfo.vue'
import CReligions from '@/components/Religions/CReligions.vue'
import CNews from '@/components/News/CNews.vue'
import CAccordion from '@/components/Accordion/CAccordion.vue'

import news from '@/data/newsCard.js'
import { Accordion } from '@/data/accordion.js'

const input = ref('')
const activeItem = ref(0 || null)

const showItem = (id, show) => {
  if (activeItem.value == id) {
    activeItem.value = null
  } else {
    activeItem.value = id
  }
}
const countryInfo = reactive([
  { img: '/images/mosque/fa-solid_mosque.svg', info: 'Attractions', count: 142 },
  { img: '/images/mosque/Mask group.svg', info: 'Destinations', count: 254 },
  { img: '/images/mosque/Mask group (1).svg', info: 'Countries', count: 7 },
  { img: '/images/mosque/Mask group (2).svg', info: 'Religions', count: 3 }
])
const accordions = reactive([
  {
    id: 1,
    show: false,
    icon: '/images/accordion-icon/flag.svg',
    title: 'What is the goal of this project? ',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 2,
    show: false,
    icon: '/images/accordion-icon/bolt.svg',
    title: 'How many countries in Organization of Turkic states?',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 3,
    show: false,
    icon: '/images/accordion-icon/flag.svg',
    title: 'What is the goal of this project? ',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 4,
    show: false,
    icon: '/images/accordion-icon/location-plus.svg',
    title: 'How many countries in Organization of Turkic states?',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 5,
    show: false,
    icon: '/images/accordion-icon/flag.svg',
    title: 'How many countries in Organization of Turkic states?',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 6,
    show: false,
    icon: '/images/accordion-icon/user-heart-alt.svg',
    title: 'How many countries in Organization of Turkic states?',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  }
])
</script>
