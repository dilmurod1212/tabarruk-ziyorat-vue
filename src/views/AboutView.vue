<template>
  <div class="bg-blue-950 min-h-screen text-white">
    <!-- <CForm /> -->
    <h1>{{ x }} {{ y }}</h1>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watchEffect, onMounted, onUnmounted, provide } from 'vue'
import index from '@/components/index.vue'
import CForm from '@/components/CForm.vue'
const input = ref('')
provide('message', input)

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>
<style></style>
