<template>
  <header class="absolute top-0 left-0 w-full z-[60]" :class="{ ' z-30': resNavbar }">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="logo max-md:w-4/5">
          <CLogo />
        </div>
        <div class="flex items-center gap-8">
          <Navbar />
          <LanguageSwitcher />
          <SearchPanel />
          <router-link to="/">
            <transition name="slide-fade" duration="100" mode="out-in">
              <i
                v-if="!resNavbar"
                class="fas fa-bars text-white open hidden max-lg:block text-2xl"
                @click="showResNavbar"
              ></i>
              <i v-else @click="showResNavbar" class="fas fa-close text-white text-2xl z-40"></i>
            </transition>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <transition name="fade">
    <div
      v-show="resNavbar"
      class="z-50 fixed left-0 top-0 h-full w-full bg-[#07091C] py-4 pt-[100px] lg:hidden"
    >
      <div class="container">
        <CInput type="text" placeholder="Search" v-model="search" />
        <div class="">
          <Navbar navClass="max-md:flex flex-col mt-8 gap-4" />
        </div>
        <LanguageSwitcher lanClass="md:block max-md:block mt-4" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import Navbar from './Navbar.vue'
import SearchPanel from './SearchPanel.vue'
import CLogo from './Logo/CLogo.vue'
import { ref } from 'vue'
import CInput from './Form/CInput.vue'
const resNavbar = ref(false)
const search = ref('')
const showResNavbar = () => {
  resNavbar.value = !resNavbar.value
  if (resNavbar.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }
}
</script>
<style>
header {
  background: linear-gradient(180deg, #07091c -61.25%, rgba(7, 9, 28, 0) 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
