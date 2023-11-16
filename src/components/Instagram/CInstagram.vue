<template>
  <div>
    <CTitle
      title="Instagram"
      descr="Stay up-to-date on the latest news and developments in the Turkic world."
    />
    <Vue3Marquee
      :pause-on-hover="true"
      :gradient="true"
      :gradient-color="[0, 0, 0, 0.2]"
      gradient-length="4%"
    >
      <div
        v-for="el in options"
        :key="el.id"
        class="p-2 rounded-xl text-white bg-white/[0.04] border border-white/10 group cursor-pointer mr-6"
      >
        <div class="relative overflow-hidden">
          <img :src="el.img" alt="" class="rounded-xl w-full" />
          <div
            class="flex items-center justify-center flex-col absolute top-0 left-0 z-30 w-full h-full bg-black/70 transform translate-y-[100%] group-hover:translate-y-0 transition-all"
          >
            <i class="fas fa-check"></i>
            <span>View post</span>
          </div>
        </div>
        <p class="text-xs mt-2">{{ el.like }}</p>
        <h2 class="text-xs my-2">{{ el.title }}</h2>
        <p class="text-[10px]">{{ el.date }}</p>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup lang="ts">
import type { Vue3Marquee } from 'vue3-marquee'
import CTitle from '../CTitle.vue'

interface Props {
  wrapperClass?: string
  options: {
    id: number
    title: string
    date: string
    img: string
    like: string
  }[]
}
defineProps<Props>()
</script>
