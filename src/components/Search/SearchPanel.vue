<template>
  <div class="search-panel relative" :class="searchClass" ref="target">
    <i
      class="text-white cursor-pointer"
      :class="[state ? 'fas fa-search' : 'fas fa-close']"
      @click="state = !state"
    ></i>
    <CSearch v-if="!state" v-auto-animate />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CSearch from '@/components/Search/CSearch.vue'

interface Props {
  searchClass: string
}
defineProps<Props>()
const state = ref(true)
const target = ref(null)
</script>
