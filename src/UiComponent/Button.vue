<template>
  <button
    class="py-2 px-4 rounded-md active:scale-95 transition hover:bg-opacity-90 active:ring-4"
    :class="props.class"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  class: String
})
</script>

<style lang="scss" scoped></style>
