<template>
  <div>
    <header class="bg-hero-pattern bg-center bg-cover h-screen">
      <div class="container">
        <div class="flex justify-between items-center">
          <div class="logo">
            <a href="#"><img src="images/Logo.svg" alt="logo" /></a>
          </div>
          <nav class="flex items-center gap-8">
            <Navbar />
            <LanguageSwitcher />
            <SearchPanel />
            <i class="fas fa-bars text-white open hidden max-md:block"></i>
          </nav>
        </div>
        <div class="text-center h-[75vh] flex flex-col items-center justify-center text-white">
          <p><i class="fa-solid fa-location-dot mx-1"></i>Samarkand, Uzbekistan</p>
          <h1 class="text-6xl max-md:text-4xl capitalize font-playfair">registan square</h1>
          <p class="descr w-4/6 max-md:w-full max-md:text-sm my-3">
            Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate
            madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th
            century.
          </p>
          <Button class="bg-[#E54545]">Explore <i class="fas fa-arrow-right"></i></Button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import Navbar from './Navbar.vue'
import SearchPanel from './SearchPanel.vue'
import Button from '@/Uicomponent/Button.vue'
</script>

<style lang="scss" scoped></style>
