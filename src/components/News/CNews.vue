<template>
  <div class="container">
    <CTitle title="News" descr="Leading news about Turkic states" divClass="mt-12" />

    <!-- ------------ -->
    <div class="flex max-md:flex-col gap-4 mt-4">
      <div class="text-white flex max-md:flex-col gap-2 p-2 border border-white/20 rounded-xl">
        <img src="/images/news/Image.png" alt="" class="rounded-lg" />
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-2xl">Organization of Turkic States to adopt “EU model”</h2>
            <p class="mt-3">
              The Organization of the Turkic States has accepted Turkish Cyprus as the observer
              state in a landmark decision for the Turkish Cypriots.
            </p>
          </div>
          <p class="text-white/60">November 10 2022</p>
        </div>
      </div>

      <div class="text-white flex max-md:gap-4 flex-col justify-between">
        <div class="flex gap-2 p-2 border border-white/20 rounded-xl">
          <img src="/images/news/Image(1).png" alt="" class="rounded-lg" />
          <div class="flex flex-col justify-between">
            <h2>Organization of Turkic States pledges observer status for Turkish Cyprus</h2>
            <p class="text-white/60">November 10 2022</p>
          </div>
        </div>
        <div class="flex gap-2 p-2 border border-white/20 rounded-xl">
          <img src="/images/news/Image(2).png" alt="" class="rounded-lg" />
          <div class="flex flex-col justify-between">
            <h2>Turkic states hold key position in Europe’s energy security: Erdoğan ANKARA</h2>
            <p class="text-white/60">November 10 2022</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <router-link to="/news">
        <Button type="button" btnClass="z-10 text-white " variant="dark"
          >All news <i class="fas fa-arrow-right"></i
        ></Button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTitle from '../CTitle.vue'
import Button from '@/components/Form/Button.vue'
</script>

<style scoped></style>
