<template>
  <div
    @focusout="hideSearchBar"
    class="top-[-50%] overflow-hidden rounded-lg absolute right-10 w-[550px] max-lg:w-[300px] max-md:w-full h-auto z-10 backdrop-blur-xl"
    :class="searchClass"
  >
    <div>
      <CInput
        type="text"
        placeholder="Enter a key word"
        v-model="search"
        @on-focus="show = true"
        class="z-10 h-full"
      />
      <!-- <div @click="state = !state">
        <i v-if="state" class="fas fa-search"></i>
        <i v-else class="fas fa-close"></i>
      </div> -->
    </div>
    <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-4">
      <li
        v-show="onSearch(userArr, search).length"
        v-for="(user, idx) in onSearch(userArr, search)"
        :key="idx"
        class="p-4 pl-0 text-white border-b border-b-white/[0.08] last:border-none cursor-pointer hover:opacity-75"
      >
        <Highlighter
          class="my-highlight"
          :style="{ color: 'inherit' }"
          highlightClassName="highlight"
          :searchWords="keyword"
          :autoEscape="false"
          :textToHighlight="user.name"
        />
      </li>
      <li
        v-show="!onSearch(userArr, search).length"
        class="flex flex-col justify-center items-center text-white p-4"
      >
        <h2 class="text-xl mb-2">No Results Found</h2>
        <p class="w-2/3 text-center text-white/60">
          Oops! We couldn't find any matching results for your search
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import CInput from '@/components/Form/CInput.vue'
import { ref, reactive, onMounted, computed } from 'vue'
import Highlighter from 'vue-highlight-words'

defineProps({ searchClass: String })

const search = ref('')
const show = ref(false)
let userArr = reactive([])
const state = ref(true)

const hideSearchBar = () => {
  show.value = false
}
const getUser = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => (userArr = json))
  console.log(userArr)
}
const onSearch = (arr: array, search: string) => {
  if (search.length == 0) {
    return arr
  } else {
    return arr.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))
  }
}

const keyword = computed(() => {
  return search.value.split(' ')
})
getUser()
onMounted(() => {})
</script>
