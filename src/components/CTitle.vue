<template>
  <div class="title text-white text-center my-4 mt-12 z-20" :class="divClass">
    <h2 class="font-playfair text-4xl max-md:file:text-3xl z-20" :class="titleClass">
      {{ title }}
    </h2>
    <div class="h-[2px] w-2/12 max-md:w-2/6 bg-red-400 mx-auto mt-3" :class="lineClass"></div>
    <p class="text-base mt-3 max-md:text-sm" :class="descrClass">{{ descr }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  descr: string
  titleClass?: string
  divClass?: string
  descrClass?: string
  lineClass?: string
}
defineProps<Props>()
</script>

<style scoped></style>
