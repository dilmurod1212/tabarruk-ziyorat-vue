<template>
  <div class="fixed w-full z-50 bg-purple-500">
    <div class="container">
      <div class="h-[80px] flex justify-between items-center text-white">
        <div class="">
          <img src="/images/Logo.svg" alt="" />
        </div>
        <ul v-show="!mobile" class="flex gap-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <div v-show="mobile" class="icon">
          <i @click="toggleMobile" class="fas fa-bars"></i>
        </div>
        <transition class="bg-yellow-600">
          <ul v-show="mobileNav" class="fixed top-0 left-0 w-2/3 h-full p-4 flex flex-col gap-2">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobile = ref(true)
const mobileNav = ref(true)

const toggleMobile = () => {
  mobileNav.value = !mobileNav.value
}
</script>

<style lang="scss" scoped></style>
