<template>
  <div
    tabindex="0"
    @focusout="hideSearchBar"
    class="absolute top-[-50%] right-10 w-[600px] max-lg:w-[400px] z-10 backdrop-blur-xl"
    :class="searchClass"
  >
    <div>
      <CInput
        type="text"
        placeholder="Enter a key word"
        v-model="search"
        @on-focus="show = true"
        @input="searchUser"
        class="z-10"
      />
    </div>
    <div v-if="show && search.length > 2">
      <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3">
        <li
          v-for="(user, idx) in userArr"
          :key="idx"
          class="p-4 pl-0 border-b border-b-white/[0.08] last:border-none cursor-pointer hover:opacity-75"
        >
          <p class="text-white">{{ userArr.length ? user.name : 'topilmadi' }}</p>
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
interface Props {
  searchClass: string
}
defineProps<Props>()

const store = useCounterStore()
const search = ref('')
const text = ref('hello text')
const show = ref(false)
let userArr = reactive([])
let newUserArr = reactive([])

const hideSearchBar = () => {
  // store.searchBar = false
  show.value = false
}
const getUser = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => (userArr = json))
}
const searchUser = () => {
  const filteredUser = userArr.filter((item) =>
    item.name.toLowerCase().includes(search.value.trim().toLowerCase())
  )
  if (filteredUser.length) {
    newArr(filteredUser) 
  } else {
    return userArr
  }
}

const newArr = (arr) => {
  userArr = arr
}
onMounted(() => {
  getUser()
})
</script>
