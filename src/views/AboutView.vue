<template>
  <div class="bg-blue-950 min-h-screen text-white">
    <input type="text" v-model="input" class="text-red-500" />
    <index />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watchEffect, onMounted, provide } from 'vue'
import index from '@/components/index.vue'
const input = ref('')
provide('message', input)
</script>
<style></style>
