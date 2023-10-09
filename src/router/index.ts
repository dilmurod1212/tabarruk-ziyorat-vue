import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/a',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {

// })

export default router
