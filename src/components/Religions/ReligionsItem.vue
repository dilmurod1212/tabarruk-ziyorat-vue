<template>
  <div
    class="text-white group border border-white/20 hover:border-white/[0.04] hover:bg-white/[0.04] p-6 rounded-xl transition-all cursor-pointer"
  >
    <div class="">
      <img
        :src="img"
        :alt="alt"
        class="p-4 group-hover:bg-red-500 transition-all rounded-lg border border-white/20 group:border-white/[0.04]"
      />
    </div>
    <h2 class="text-2xl font-bold my-4">{{ religion }}</h2>
    <p>
      {{ descr }}
    </p>
    <p class="mt-2 group-hover:text-red-500 transition-all">
      See more <i class="fas fa-arrow-right"></i>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string
  religion: string
  descr: string
  alt?: string
}
defineProps<Props>()
</script>

<style scoped></style>
