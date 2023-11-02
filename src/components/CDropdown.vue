<template>
  <ul
    class="absolute top-[100%] gap-2 bg-white/20 border border-white/30 backdrop-blur-lg rounded-xl p-2"
    :class="[className, dropData.length > 3 ? 'grid grid-cols-2 ' : '']"
  >
    <li
      v-for="(el, idx) in dropData"
      :key="idx"
      class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer"
    >
      <img :src="el.img" alt="" class="" />
      <div class="text-white">
        <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.title }}</h3>
        <p class="text-sm opacity-60">{{ el.descr }} destinations</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
const props = defineProps({ dropData: Array, className: String })

const showCountries = () => {
  state.value = !state.value
}
</script>

<style scoped></style>
