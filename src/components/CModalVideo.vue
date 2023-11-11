<template>
  <div>
    <div
      class="video-player min-h-[500px] max-lg:min-h-[400px] max-md:min-h-[300px] flex justify-center items-center flex-col relative"
    >
      <div class="container">
        <h2
          class="font-playfair text-4xl max-md:text-2xl text-center text-white absolute left-2/4 -translate-x-[50%] top-10"
        >
          Promo Video about Tabarruk ziyorat
        </h2>
      </div>
      <div
        @click="showModal = true"
        class="text-white group cursor-pointer w-[100px] h-[100px] max-md:h-[60px] max-md:w-[60px] bg-red-600 flex justify-center items-center rounded-full"
      >
        <i class="fas fa-play group-hover:scale-110 transition-all text-4xl max-md:text-2xl"></i>
      </div>
    </div>

    <n-modal
      v-model:show="showModal"
      class="custom-card"
      preset="card"
      :style="bodyStyle"
      :bordered="false"
      size="huge"
      :segmented="segmented"
    >
      <template #header>
        <div class="">
          <p class="text-white text-start block text-lg max-md:text-sm">
            Turkiy mamlakatlarning qimmatli, tarixiy va merosi joylarini o'rganing
          </p>
        </div>
      </template>
      <iframe
        width="100%"
        height="250px"
        data-v-fdb8a45c=""
        :src="link.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </n-modal>

    <!-- <Modal size="5xl" v-if="isShowModal" @close="closeModal" color="green" class="">
      <template #header>
        <div class="flex items-center text-lg">
          <h2 class="max-md:text-sm max-lg:text-base text-xl">
            Turkiy mamlakatlarning qimmatli, tarixiy va merosi joylarini o'rganing
          </h2>
        </div>
      </template>
      <template #body>
        <div class="min-h-[250px] h-full">
          <iframe
            width="100%"
            height="250px"
            data-v-fdb8a45c=""
            :src="link.url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </template>
    </Modal> -->
  </div>
</template>

<script setup lang="ts">
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

// https://www.youtube.com/embed/2vK0fnOs8OA?si=MUdYdQxal86ZFkot
// https://youtu.be/2vK0fnOs8OA?si=nag4OnVOJMgAgVpO
const link = defineProps({ url: String })

const bodyStyle = ref({
  width: '80%',
  background: '#111325',
  titleColor: 'white',
  opacity: '1',
  boxShadow: '0 0 10px 4px rgba(255, 255, 255, 0.2)',
  title: {
    color: 'white'
  }
})
const segmented = ref({
  content: 'soft',
  footer: 'soft'
})
const showModal = ref(false)
// function closeModal() {
//   isShowModal.value = false
//   document.body.style.overflowY = 'scroll'
// }
// function showModal() {
//   isShowModal.value = true
//   document.body.style.overflowY = 'hidden'
// }
</script>

<style>
.video-player {
  background: linear-gradient(
      180deg,
      #07091c -4.12%,
      rgba(7, 9, 28, 0.6) 49.39%,
      rgba(7, 9, 28, 0.2) 85.78%,
      #07091c 100%
    ),
    url('/images/Image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.modal {
  background-color: green;
}
</style>
