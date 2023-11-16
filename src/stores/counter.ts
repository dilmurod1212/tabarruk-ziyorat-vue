import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(20)
  const searchBar = ref(false)
  const doubleCount = computed(() => count.value * 2)
  const locale = 'en'
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, searchBar, locale }
})
