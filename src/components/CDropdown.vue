<template>
  <ul
    class="absolute top-[100%] right-auto gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
    :class="{ 'grid grid-cols-2 left-0': religion.length > 3 }"
  >
    <li
      v-for="(el, idx) in religion"
      :key="idx"
      class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer"
    >
      <img :src="el.img" alt="" class="" />
      <div class="text-white">
        <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.title }}</h3>
        <p class="text-sm opacity-60">{{ el.destination }} destinations</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const state = ref(false)
interface Props {
  item: {
    flag?: string
    icon?: string
    countryDest?: number
    religionDest?: number
    country?: string
    religion?: string
  }
}
const props = defineProps(['religion'])
console.log(props)

const showCountries = () => {
  state.value = !state.value
  console.log('hover')
}
</script>

<style scoped></style>
