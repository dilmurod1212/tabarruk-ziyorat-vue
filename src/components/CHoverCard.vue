<template>
  <div class="wrapper max-md:w-full">
    <div class="images flex gap-2">
      <div
        v-for="(el, idx) in panels"
        :key="idx"
        class="panel bg-[url('/images/baku.jpeg')]"
        :class="[el.class, el.isActive ? ' active' : '']"
        @mouseover="() => actived(el.id)"
      >
        <h3>{{ el.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const panels = reactive([
  {
    text: 'Baku, Azerbaijan',
    class: "bg-[url('/images/baku.jpeg')] ",
    isActive: false,
    id: 1
  },
  { text: 'Bakuu, Azerbaijan', class: "bg-[url('/images/bukhara.jpeg')]", isActive: false, id: 2 },
  { text: 'Bakuuu, Azerbaijan', class: "bg-[url('/images/turcey.jpg')]", isActive: true, id: 3 },
  { text: 'Bakuuuu, Azerbaijan', class: "bg-[url('/images/hungary.jpg')]", isActive: false, id: 4 }
])
const actived = (id: number) => {
  panels.forEach((item) => {
    item.isActive = false
    if (item.id === id) {
      // item.class = ' active'
      item.isActive = true
    }
  })
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  width: 85vw;
}
.images {
  display: flex;
}

/* ------------------ */

.panel {
  background-size: auto 110%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  height: 60vh;
  flex: 0.5;
  margin: 5px;
  position: relative;
  transition: flex 0.3s ease-in;
  cursor: pointer;
}
.panel h3 {
  font-size: 24px;
  position: absolute;
  color: white;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}
.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
