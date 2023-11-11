
<template>
  <div class="bg-[#111325] -z-20">
    <home/>
  </div>
</template>
<script setup>
import Home from './layout/Home.vue';

</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
