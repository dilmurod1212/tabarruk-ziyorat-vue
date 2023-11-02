<template>
  <div class="bg-[#111325] -z-20">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" :duration="200">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

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
