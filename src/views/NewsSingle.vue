<template>
  <div class="container">
    <div class="text-white p-4 mt-16 w-2/3 max-lg:w-full mx-auto">
      <h2 class="text-4xl max-lg:text-3xl max-md:text-2xl my-4">{{ item.title }}</h2>
      <div class="flex gap-4">
        <p class="text-[#727272]"><i class="fa-solid fa-calendar-days mr-1"></i>{{ item.date }}</p>
        <p class="text-[#727272]"><i class="fa-solid fa-eye mr-1"></i>{{ item.date }}</p>
      </div>
      <img :src="item.img" alt="" class="w-full my-2" />
      <p class="my-2 text-xl">A Classic Mismatch</p>
      <div>
        <h3 class="my-2 text-xl">Dear guests!</h3>
        <p>
          The good news is that SVB’s problems are largely idiosyncratic. Like most regional banks,
          SVB’s depositor base was much less diversified than nationwide banks. But in the case of
          SVB, that narrow exposure came in the form of its depositor base being concentrated in
          tech start-ups, a type of firm that not only burns through cash, but quickly and at an
          unpredictable rate.
        </p>
      </div>
      <div class="my-4 p-5 rounded-xl bg-white/[0.05]">
        <p>
          No sooner does a firm keel over than calls for a bailout or some other government rescue
          ring out. The effrontery that attends the call to hurl taxpayers beneath the wheels of the
          business failure bus is perhaps the most enduring dividend of a chain of government
          rescues beginning with
        </p>
        <div class="mt-4">
          <h2 class="font-bold">Ш. М. Мирзиёев</h2>
          <p>Президент Республики Узбекистан</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import news from '@/data/newsCard.js'

const router = useRouter()
const route = useRoute()

const item = ref(news[route.params.id - 1])
</script>

<style scoped></style>
