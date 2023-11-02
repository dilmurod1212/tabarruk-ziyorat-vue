<template>
  <ul class="cursor-pointer" :class="lanClass">
    <li @click="showLanguage" @focusout="hide">
      <img src="/images/TheUK.svg" alt="uk-icon" />
    </li>
    <CDropdown v-if="state" :dropData="dropdownCountries" className="right-0 " />
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CDropdown from './CDropdown.vue'
import { dropdownCountries, religions } from '@/data/dropdown.js'

const props = defineProps({ lanClass: String, data: Array })
const state = ref(false)

const showLanguage = () => {
  state.value = !state.value
  console.log(props.data)
}
const hide = () => {
  state.value = !state.value
  console.log('switch')
}
</script>

<style scoped></style>
