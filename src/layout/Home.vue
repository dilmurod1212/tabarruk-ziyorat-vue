<template>
  <div class="flex flex-col">
    <Header />
    <main class="grow">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <div class="mt-auto">
      <CFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import CFooter from '@/components/CFooter.vue'
import Navigation from '@/components/Navigation.vue'
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
