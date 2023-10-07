<template>
  <div class="container">
    <CTitle
      title="Religions"
      descr="This website is created to share information about historical, unique places located in Turkic countries. "
    />
    <div class="flex justify-between gap-4 max-md:flex-col">
      <ReligionsItem
        v-for="(el, idx) in religions"
        :key="idx"
        :img="el.img"
        :religion="el.religion"
        :descr="el.descr"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CTitle from '@/components/CTitle.vue'
import ReligionsItem from './ReligionsItem.vue'

const religions = reactive([
  {
    img: '/images/religions/islam-icon.svg',
    religion: 'ISLAM',
    descr:
      'This website is created to share information about historical, unique places located in Turkic countries. '
  },
  {
    img: '/images/religions/christian-icon.svg',
    religion: 'CHRISTIANITY',
    descr:
      'This website is created to share information about historical, unique places located in Turkic countries. '
  },
  {
    img: '/images/religions/budism-icon.svg',
    religion: 'BUDDISM',
    descr:
      'This website is created to share information about historical, unique places located in Turkic countries. '
  }
])
</script>

<style scoped></style>
