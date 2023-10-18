<template>
  <div class="search-panel max-md:hidden relative">
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
import CSearch from './CSearch.vue'
const state = ref(true)
</script>
