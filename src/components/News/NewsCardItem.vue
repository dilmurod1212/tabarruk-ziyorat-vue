<template>
  <div
    class="text-white p-4 max-md:p-2 bg-[#202233] rounded-xl hover:shadow-lg hover:shadow-red-500/50 group duration-200 h-full"
  >
    <img :src="item.img" :alt="item.alt" class="w-full" />
    <h3 class="mt-4 group-hover:text-red-500 transition-all max-md:text-sm">
      {{ item.title }}
    </h3>
    <p class="text-sm max-md:text-xs text-white/60 font-normal my-2">
      {{ item.descr }}
    </p>
    <div class="flex justify-between items-center">
      <p>{{ item.date }}</p>
      <i
        class="fas fa-arrow-right cursor-pointer relative right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: {
    id: number
    descr: string
    title: string
    img: string
    alt?: string
    date: string
  }
}
defineProps<Props>()
</script>

