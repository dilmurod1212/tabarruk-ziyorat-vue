<template>
  <div
    :id="'id'"
    class="flex flex-col justify-center px-16 py-4 items-center hover:bg-white/[0.04] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white/40 border-transparent hover:border-white/[0.05] p-3 rounded-xl transition-all cursor-pointer"
  >
    <img :src="flag" alt="uz-flag" class="p-0 m-0" />
    <div class="text-white text-center mt-4">
      <h3 class="text-xl">{{ country }}</h3>
      <p class="text-sm opacity-60">{{ destination }} destinations</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: number
  flag: string
  country: string
  destination: number
}

defineProps<Props>()
</script>

<style scoped></style>
