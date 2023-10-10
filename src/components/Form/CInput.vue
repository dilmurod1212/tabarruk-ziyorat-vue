<template>
  <div
    class="flex items-center bg-white/10 border border-white/20 rounded-lg focus-within:border-blue-300"
    :class="{ '!border-red-600': error }"
  >
    <slot name="prefix"></slot>
    <input
      class="py-3 px-4 outline-none focus:outline-none placeholder:text-white/20 text-white bg-transparent w-full"
      v-bind="{ type, placeholder, minLength, maxLength, id }"
      :value="modelValue"
      @input="inputHandler"
      @blur="emit('on-blur')"
      @focus="emit('on-focus')"
      @focusout="emit('focus-out')"
      @keyup="emit('key-down')"
    />
    <!-- <slot name="suffix"></slot> -->
    <i
      class="fas fa-close text-xl px-4 cursor-pointer text-white"
      @click="modelValue = ''"
      v-if="modelValue.length > 2"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
interface Props {
  type: string
  placeholder: string
  modelValue: string | number
  maxLength?: number
  minLength?: number
  id?: string
  inputClass?: string
  error?: boolean
}
defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', val: Event): void
  (e: 'on-focus'): void
  (e: 'on-blur'): void
  (e: 'focus-out'): void
  (e: 'key-up'): void
  (e: 'key-down'): void
}>()

const inputHandler = (event: any) => {
  emit('update:modelValue', event.target?.value)
}
</script>

<style lang="scss" scoped></style>
