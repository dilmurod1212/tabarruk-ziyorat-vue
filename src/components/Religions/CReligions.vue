<template>
  <div class="container">
    <CTitle
      title="Religions"
      descr="This website is created to share information about historical, unique places located in Turkic countries. "
    />
    <div class="flex justify-between gap-4 max-md:flex-col" :class="wrapperClass">
      <ReligionsItem :religions="religion" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CTitle from '@/components/CTitle.vue'
import ReligionsItem from './ReligionsItem.vue'
import { religions } from '@/data/religions.js'

interface Props {
  wrapperClass?: string
}
defineProps<Props>()
const religion = reactive(religions)
</script>
