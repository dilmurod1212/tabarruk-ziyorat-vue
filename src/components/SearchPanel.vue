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
import type CInput from './Form/CInput.vue'
import CSearch from './CSearch.vue'
// interface Props {
//   state: boolean
// }
// defineProps<Props>()
const state = ref(true)
const hidden = ref('hidden')
</script>

<style scoped></style>
