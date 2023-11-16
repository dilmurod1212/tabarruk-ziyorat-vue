import './assets/main.css'
import en from '@/locale/en.json'
import ru from '@/locale/ru.json'
import uz from '@/locale/uz.json'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createI18n } from 'vue-i18n'
import { useCounterStore } from './stores/counter'

import Vue3Marquee from 'vue3-marquee'
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())

const store = useCounterStore()
console.log(store.locale  )

const i18n = createI18n({
  locale: store.locale,
  messages: {
    en: en,
    ru: ru,
    uz: uz
  }
})

app.use(i18n)
app.use(autoAnimatePlugin)
app.use(router)
app.use(Vue3Marquee)
app.use(naive)

app.mount('#app')
