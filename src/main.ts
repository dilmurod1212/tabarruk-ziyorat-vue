import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import Vue3Marquee from 'vue3-marquee'
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(autoAnimatePlugin)
app.use(router)
app.use(Vue3Marquee)
app.use(naive)

app.mount('#app')
