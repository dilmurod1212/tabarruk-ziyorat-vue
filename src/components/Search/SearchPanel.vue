<template>
  <div
    v-if="!state"
    @click="changeState"
    class="fixed left-0 top-0 bg-black/50 w-full h-full z-30"
  ></div>
  <div class="relative flex gap-4 items-center z-40" :class="searchClass" ref="target">
    <CSearch v-if="!state" v-auto-animate />
    <i
      class="text-white cursor-pointer"
      :class="[state ? 'fas fa-search' : 'fas fa-close']"
      @click="changeState"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CSearch from '@/components/Search/CSearch.vue'

interface Props {
  searchClass: string
}
defineProps<Props>()
const emit = defineEmits(['on-change'])

const state = ref(true)
const target = ref(null)

const changeState = () => {
  state.value = !state.value
  emit('on-change', state.value)
}
</script>
