<template>
  <div class="container">
    <div class="flex items-center max-md:flex-col max-md:items-start gap-4 text-white py-8">
      <div class="flex flex-col flex-1">
        <CLogo />
        <p class="text-sm">
          This website is created to share information about historical, unique places located in
          Turkic states.
        </p>
      </div>
      <div class="flex flex-1 gap-4 justify-center items-center">
        <a href="#"><i class="fa-brands fa-telegram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div class="flex flex-col flex-1">
        <router-link to="/">Main page</router-link>
        <router-link to="/">Contact</router-link>
        <router-link to="/">Privacy</router-link>
      </div>
      <div class="flex flex-col flex-1">
        <router-link to="/">Media resources</router-link>
        <router-link to="/">F.A.Q</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CLogo from './Logo/CLogo.vue'
</script>

<style scoped></style>
