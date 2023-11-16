<template>
  <div>
    <Vue3Marquee :pause-on-hover="true">
      <div class="flex gap-9 max-lg:gap-4 max-md:gap-3">
        <div
          class="card p-4 bg-white/[0.04] border border-white/20 flex justify-center items-center rounded-xl w-[280px] max-md:w-[200px]"
          v-for="avatar in avatarArray"
          :key="avatar"
        >
          <img :src="avatar" class="" />
        </div>
      </div>
    </Vue3Marquee>
    <Vue3Marquee :pause-on-hover="true" :direction="'reverse'">
      <div class="flex gap-9 max-lg:gap-4 max-md:gap-3 mt-4">
        <div
          class="card p-4 bg-white/[0.04] border border-white/20 flex justify-center items-center rounded-xl w-[280px] max-md:w-[200px]"
          v-for="avatar in logoArray"
          :key="avatar"
        >
          <img :src="avatar" class="" />
        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const avatarArray = reactive([
  '/images/slider-logo/Frame.svg',
  '/images/slider-logo/Group 86.svg',
  '/images/slider-logo/Group 19051.svg',
  '/images/slider-logo/Layer_1.svg'
])
const logoArray = reactive([
  '/images/slider-logo/Layer_1.svg',
  '/images/slider-logo/Group 86.svg',
  '/images/slider-logo/Frame.svg',
  '/images/slider-logo/Group 19051.svg'
])
</script>

<style scoped></style>
