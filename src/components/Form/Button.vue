<template>
  <button
    :type="type"
    class="py-3 px-7 rounded-lg active:scale-90 transition duration-200"
    :class="[clasList, btnClass]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface Props {
  type?: string
  variant: string
  btnClass?: string
}
const props = defineProps<Props>()
const clasList = ref('')

if (props.variant == 'red') {
  clasList.value = 'bg-btn-red hover:bg-btn-red-hover active:ring-4 active:ring-btn-red'
} else if (props.variant == 'dark') {
  clasList.value = 'bg-btn-dark hover:bg-btn-dark-hover active:ring-4 active:ring-btn-dark'
} else {
  clasList.value = 'bg-btn-dark hover:bg-btn-dark-hover active:ring-4 active:ring-btn-dark'
}

</script>

<style lang="scss" scoped></style>
