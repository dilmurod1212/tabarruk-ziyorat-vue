<template>
  <div class="cursor-pointer" :class="switcherClass">
    <CDropdown
      :options="languageSwitcherData"
      value-key="descr"
      label-key="title"
      class-name="right-0"
      optionsWrapperClass="grid grid-cols-3 gap-1 right-0 max-md:left-0 max-md:grid-cols-2 max-md:right-auto"
    >
      <template #header>
        <img src="/images/TheUK.svg" alt="uk-icon" />
      </template>
      <template v-slot:option="slotData">
        <div class="text-white flex gap-x-2">
          <img :src="slotData.data.img" :alt="slotData.data.title" />
          <h2>{{ slotData.data.title }}</h2>
        </div>
      </template>
    </CDropdown>
  </div>
</template>

<script setup lang="ts">
import CDropdown from './CDropdown.vue'
import { languageSwitcherData } from '../data/dropdown.js'

interface Props {
  switcherClass: string
}
defineProps<Props>()
</script>

<style scoped></style>
