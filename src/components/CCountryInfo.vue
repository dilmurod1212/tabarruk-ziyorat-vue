<template>
  <div class="flex bg-white/[0.04] p-4 rounded-lg relative w-[250px] max-md:w-full overflow-hidden">
    <div class="text-white">
      <h3 class="text-4xl font-bold">{{ count }}</h3>
      <p class="text-xl">{{ info }}</p>
    </div>
    <img :src="img" alt="" class="absolute right-0 bottom-0" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string
  count: number
  info: string
  // countryInfo: {
  // }
}

defineProps<Props>()
</script>

<style scoped></style>
