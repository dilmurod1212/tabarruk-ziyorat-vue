<template>
  <div class="container flex justify-between gap-4 max-lg:flex-wrap" :class="wrapperClass">
    <div
      v-for="(card, idx) in options"
      :key="idx"
      class="flex bg-white/[0.04] p-4 rounded-lg relative w-full max-md:w-full overflow-hidden"
      :class="optionClass"
    >
      <div class="text-white">
        <h3 class="text-4xl font-bold">{{ card.count }}</h3>
        <p class="text-xl">{{ card.info }}</p>
      </div>
      <img :src="card.img" alt="card-img" class="absolute right-0 bottom-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  options: {
    count: string
    info: string
    img: string
  }[]
  wrapperClass?: string
  optionClass?: string
}

defineProps<Props>()
</script>
