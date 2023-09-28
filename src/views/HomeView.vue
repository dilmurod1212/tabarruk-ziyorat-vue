<template>
  <main>
    <RouterLink :to="{ name: 'About' }" style="font-size: 24px">About page</RouterLink>
    <RouterView />
    <button @click="counter">Count me</button>
    Count: {{ count }} {{  user.gender  }}
  </main>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { IUser } from "@/types/product"
const count = ref(0)
const user = reactive<IUser>({
  name: 'aziz',
  id: 12,
  gender: 'male'
})

const counter = () => {
  count.value++
}
</script>
