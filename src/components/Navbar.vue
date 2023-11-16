<template>
  <nav>
    <ul
      class="flex gap-4 text-white max-lg:hidden relative"
      :class="navClass"
      @click="$emit('close')"
    >
      <li>
        <router-link to="/about"
          ><h2 class="capitalize">{{ $t('about') }}</h2></router-link
        >
      </li>
      <li>
        <CDropdown
          :options="dropdownCountries"
          value-key="descr"
          label-key="title"
          class-name="right-0"
          option-class=" last:mb-0 "
          optionsWrapperClass="grid grid-cols-2 gap-2 left-0"
        >
          <template #header>
            <h2 class="capitalize">{{ $t('countries') }}</h2>
          </template>
        </CDropdown>
      </li>
      <li @click="showReligion = !showReligion" @focusout="showReligion = false">
        <CDropdown
          :options="religions"
          value-key="descr"
          label-key="title"
          class-name="right-0"
          option-class=" last:mb-0 mb-1"
          optionsWrapperClass=""
          @on-click="onDropdownClick"
        >
          <template #header>
            <h2 class="capitalize">{{ $t('religions') }}</h2>
          </template>
        </CDropdown>
      </li>
      <li>
        <h2 class="capitalize">{{ $t('haritage') }}</h2>
      </li>
      <li>
        <h2 class="capitalize">{{ $t('help') }}</h2>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const showReligion = ref(false)

import { dropdownCountries, religions } from '@/data/dropdown.js'
import CDropdown from './CDropdown.vue'
defineProps({ navClass: String })

const onDropdownClick = (element) => {
  console.log(element, 'on dropdown option click')
}
</script>

<style scoped>
ul li a:hover {
  opacity: 0.4;
  transition: all 0.3s;
}
.router-link-exact-active,
.active {
  opacity: 0.4;
  font-weight: 700;
}
</style>
