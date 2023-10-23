<template>
  <div>
    <div class="container">
      <div class="flex justify-between max-md:flex-col items-center max-md:items-start">
        <div class="text-white flex flex-col gap-4 py-6">
          <h2 class="text-4xl font-playfair">Contacts</h2>
          <div v-for="(item, idx) in contactInfo" :key="idx">
            <p class="max-md:text-sm text-white/60 font-light mb-1 flex items-center gap-1">
              <i :class="item.icon"></i>{{ item.iconName }}
            </p>
            <h4 class="text-xl max-lg:text-base font-bold">{{ item.title }}</h4>
          </div>
        </div>
        <div class="h-[250px] w-[600px] max-lg:w-[400px] max-md:w-full">
          <iframe
            class="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.108618813058!2d69.31345292164745!3d41.32000820980603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef58d8193b3cd%3A0xd6d0b321d0ea5cd8!2sMehmonxona!5e0!3m2!1suz!2s!4v1697805473555!5m2!1suz!2s"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  contactInfo: {
    icon: string
    iconName: string
    title: string
  }[]
}
defineProps<Props>()
</script>

<style scoped></style>
