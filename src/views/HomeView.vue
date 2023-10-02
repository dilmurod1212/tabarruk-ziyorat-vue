<template>
  <div class="py-24">
    <main class="container">
      <CInput type="text" placeholder="Enter keyword" v-model="input" :error="!input.length">
        <template #suffix>
          <span
            v-if="input.length > 3"
            @click="input = ''"
            class="text-white text-lg px-4 hover:text-red-500 transition duration-200 ease-in-out cursor-pointer"
          >
            X
          </span>
        </template>
      </CInput>
      <pre class="text-lg text-white"> input: {{ input }} </pre>
      <CSearch />
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { IUser } from '@/types/product'
import CInput from '@/components/Form/CInput.vue'
import CSearch from '@/components/CSearch.vue'
const count = ref(0)
const input = ref('')
const user = reactive<IUser>({
  name: 'aziz',
  id: 12,
  gender: 'male'
})

const counter = () => {
  count.value++
}
</script>
