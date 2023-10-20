<template>
  <header class="absolute top-0 left-0 w-full z-30">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="logo max-md:w-4/5">
          <CLogo />
        </div>
        <div class="flex items-center gap-8">
          <Navbar />
          <LanguageSwitcher />
          <SearchPanel />
          <router-link to="/about">
            <i class="fas fa-bars text-white open hidden max-lg:block text-2xl"></i>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import Navbar from './Navbar.vue'
import SearchPanel from './SearchPanel.vue'
import CLogo from './Logo/CLogo.vue'
</script>
<style>
header {
  background: linear-gradient(180deg, #07091c -61.25%, rgba(7, 9, 28, 0) 100%);
}
</style>
