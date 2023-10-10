<template>
  <div class="bg-blue-950 min-h-screen text-white">
    <h1>hello</h1>
    <div class="grid grid-cols-2 max-md:grid-cols-1 gap-4">
      <!-- <CAccordion :accordions="accordions" /> -->
    </div>
    <CInstagram />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import NewsCardItem from '@/components/News/NewsCardItem.vue'
// import CAccordion from '@/components/accordion/CAccordion.vue'
import { reactive } from 'vue'
import CInstagram from '@/components/Instagram/CInstagram.vue'

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
    show: true,
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
<style></style>
