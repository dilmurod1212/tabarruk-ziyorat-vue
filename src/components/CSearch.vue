<template>
  <div
    @focusout="hideSearchBar"
    class="absolute top-[-50%] overflow-hidden rounded-lg right-10 w-[550px] max-lg:w-[300px] h-auto z-10 backdrop-blur-xl"
    :class="searchClass"
  >
    <CInput
      type="text"
      placeholder="Enter a key word"
      v-model="search"
      @on-focus="show = true"
      class="z-10 h-full"
    />
    <ul
      v-show="search.length"
      class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-4"
    >
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
      <li v-show="!onSearch(userArr, search).length" class="text-center text-white p-4">
        malumot topilmadi
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import CInput from './Form/CInput.vue'
import { ref, reactive, onMounted, computed } from 'vue'
import Highlighter from 'vue-highlight-words'

defineProps({ searchClass: String })

const search = ref('')
const show = ref(false)
let userArr = reactive([])
let newUserArr = reactive([])

const hideSearchBar = () => {
  show.value = false
}
const getUser = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => (userArr = json))
  console.log(userArr)
}
const onSearch = (arr, search) => {
  if (search.length == 0) {
    return arr
  } else {
    return arr.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  }
}

const keyword = computed(() => {
  return search.value.split(' ')
})
getUser()
onMounted(() => {})
</script>
