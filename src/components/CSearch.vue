<template>
  <div tabindex="0" @focusout="hideSearchBar" class="fixed w-4/6 right-20">
    <div>
      <CInput
        type="text"
        placeholder="Enter a key word"
        v-model="search"
        @on-focus="show = true"
        @key-up="getUser"
        getUser="getUser"
      />
    </div>
    <div v-if="show && search.length > 2">
      <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3">
        <li
          v-for="(user, idx) in userArr"
          :key="idx"
          class="p-4 pl-0 border-b border-b-white/[0.08] last:border-none cursor-pointer hover:opacity-75"
        >
          <p class="text-white">{{ user.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import CInput from './Form/CInput.vue'
// import { countries } from '@/constants/countrySlide.js'
import { ref, reactive, onMounted } from 'vue'
const store = useCounterStore()
const search = ref('')
const text = ref('hello text')
const show = ref(false)
let userArr = ref(<array>[])

const hideSearchBar = () => {
  // store.searchBar = false
  show.value = false
}
const getUser = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => (userArr.value = json))
  console.log('getUser')
}

onMounted(() => {
  getUser()
  // console.log(text.value)
  // console.log(userArr.value)
  console.log(userArr.value)
})
const filterUser = () => {
  const newArr = userArr.filter((item) =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
}
</script>
