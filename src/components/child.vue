<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const message = inject('message')
console.log(message.value)
</script>

<style lang="scss" scoped></style>
