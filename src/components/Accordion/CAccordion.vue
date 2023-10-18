<template>
  <div
    class="p-5 flex flex-col justify-center rounded-xl border h-fit border-white/20 bg-white/[0.04] text-white cursor-pointer min-h-[98px]"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <img :src="icon" alt="" class="p-2 rounded-lg bg-red-600 border border-red-400" />
        <h2 class="text-xl max-lg:text-base max-md:text-sm">{{ title }}</h2>
      </div>
      <div class="rounded-lg bg-white/10 border border-white/10 cursor-pointer">
        <i
          class="fas fa-chevron-down transition-all p-2"
          :class="{ 'rotate-180 transition-transform': show }"
        ></i>
      </div>
    </div>
    <div v-auto-animate>
      <p v-if="show" class="mt-5 pt-5 pl-0 font-light border-t max-lg:text-sm max-md:text-xs border-t-white/20 transition-all">
        {{ descr }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Transition } from 'vue'
// import { CollapseTransition } from '@ivanv/vue-collapse-transition'
interface Props {
  id: number
  title: string
  descr: string
  icon: string
  show: boolean
}
defineProps<Props>()
</script>
