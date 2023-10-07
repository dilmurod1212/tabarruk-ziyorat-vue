<template>
  <div class="bg-hero-pattern bg-center bg-cover h-screen max-md:h-auto">
    <header class="bg-[#111325b8] border-b border-b-slate-500 top-0 left-0 w-full z-10">
      <div class="container">
        <div class="flex justify-between items-center">
          <div class="logo max-md:w-4/5">
            <CLogo />
          </div>
          <nav class="flex items-center gap-8">
            <Navbar />
            <LanguageSwitcher />
            <SearchPanel @click="showSearchBar" :state="state" />
            <div>
              <i class="fas fa-bars text-white open hidden max-lg:block text-2xl"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="text-center h-[75vh] flex flex-col items-center justify-center text-white">
      <p><i class="fa-solid fa-location-dot mx-1"></i>Samarkand, Uzbekistan</p>
      <h1 class="text-8xl max-md:text-5xl capitalize font-playfair mb-4 max-md:mb-2">
        registan square
      </h1>
      <p class="descr w-4/6 max-md:w-4/5 max-md:text-base my-3">
        Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate
        madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th
        century.
      </p>
      <Button type="button" btnClass="" variant="red"
        >Explore <i class="fas fa-arrow-right"></i
      ></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import Navbar from './Navbar.vue'
import SearchPanel from './SearchPanel.vue'
import Button from '@/components/Form/Button.vue'
import CInput from './Form/CInput.vue'
import CSearch from './CSearch.vue'
import CLogo from './Logo/CLogo.vue'
import { onMounted, ref, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
import type CInputVue from './Form/CInput.vue'
// import CSearch from './CSearch.vue'
const input = ref('')
const store = useCounterStore()
const state = ref(false)
const obj = reactive({ name: 'dima', age: 21 })

const showSearchBar = () => {
  store.searchBar = !store.searchBar
}

onMounted(() => {
  // console.log(store.searchBar)
})
</script>

<style lang="scss" scoped></style>
