<template>
  <div class="container">
    <CTitle
      title="Have a question for us?"
      descr="Feel in the form below and we will get in touch  with you"
      divClass="text-start"
      lineClass="mx-0"
    />
    <form class="w-[400px]">
      <div class="flex gap-4">
        <div>
          <p>Name</p>
          <CInput type="text" placeholder="Samantha Smith" v-model="nameInput" />
        </div>
        <div>
          <p>Contact</p>
          <CInput type="email" placeholder="example@gmail.com" v-model="conatcInput" />
        </div>
      </div>
      <div class="mt-4">
        <p>Contact</p>
        <CInput type="textarea" placeholder="example@gmail.com" v-model="conatcInput" />
      </div>
      <Button variant="red" btnClass="mt-4">Send <i class="fas fa-server"></i></Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CTitle from './CTitle.vue'
import CInput from './Form/CInput.vue'
import Button from './Form/Button.vue'

const nameInput = ref('')
const conatcInput = ref('')
</script>

<style scoped></style>
