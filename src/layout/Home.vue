<template>
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <CFooter />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import CFooter from '@/components/CFooter.vue'
</script>

<style lang="scss" scoped></style>
