import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/layout/Home.vue'),
      children: []
    },
    {
      path: '',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/:id',
      name: 'NewsSingle',
      component: () => import('../views/NewsSingle.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {

// })

export default router
