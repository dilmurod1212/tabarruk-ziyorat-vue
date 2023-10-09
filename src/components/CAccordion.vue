<template>
  <div
    class="p-5 rounded-xl border border-white/20 bg-white/[0.04] text-white"
    v-for="(el, idx) in accordions"
    :key="idx"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <img :src="el.icon" alt="" class="p-2 rounded-lg bg-red-600 border border-red-400" />
        <h2 class="text-xl">{{ el.title }}</h2>
      </div>
      <div
        @click="() => showAccordion(el.id)"
        class="rounded-lg bg-white/10 border border-white/10 cursor-pointer"
      >
        <i
          class="fas fa-chevron-down transition-all p-2"
          :class="{ 'rotate-180 transition-transform': el.show }"
        ></i>
      </div>
    </div>
    <p
      class="mt-5 pt-5 pl-0 font-light border-t border-t-white/20 transition-all"
      :class="{ 'hidden opacity-0 transition-all  ': !el.show }"
    >
      {{ el.descr }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const state = ref(true)

const showAccordion = (id) => {
  props.accordions?.forEach((item) => {
    if (item.id == id) {
      item.show = !item.show
      console.log(item.show, 'logger')
    }
    if (item.id != id) {
      item.show = false
    }
  })
  // state.value = !state.value
  // props.show = !props.show
}
interface Props {
  // id: number
  // title: string
  // descr: string
  // icon: string
  // show:boolean
}
// const props = defineProps<Props>()

const props = defineProps({
  accordions: Array
})

// v-for="(el, idx) in accordions" :key="idx" :icon="el.icon" :title="el.title" :descr="el.descr" :id="el.id" :show="el.show"
</script>

<style scoped></style>
