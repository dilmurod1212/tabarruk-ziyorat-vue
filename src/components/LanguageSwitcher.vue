<template>
  <div
    class="language-switcher hidden lg:block top-0 left-0"
    :class="lanClass"
    @click="showLanguage"
    @focusout="state = false"
  >
    <img src="/images/TheUK.svg" alt="uk-icon" />
    <!-- <CDropdown v-if="state" :religion="dropdownCountries" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CDropdown from './CDropdown.vue'
import { dropdownCountries, religions } from '@/data/dropdownCountries.js'

defineProps({ lanClass: String })
const state = ref(false)

const showLanguage = () => {
  state.value = !state.value
}
</script>

<style scoped></style>
