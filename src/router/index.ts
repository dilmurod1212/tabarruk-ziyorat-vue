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
    },
    {
      path: '/islam',
      name: 'islam',
      component: () => import('../views/religions/Islam.vue')
    },
    {
      path: '/buddism',
      name: 'buddism',
      component: () => import('../views/religions/Buddism.vue')
    },
    {
      path: '/christianity',
      name: 'christianity',
      component: () => import('../views/religions/Christianity.vue')
    },
    {
      path: '/uzbekistan',
      name: 'uzbekistan',
      component: () => import('../views/countries/Uzbekistan.vue')
    },
    {
      path: '/turkiye',
      name: 'turkiye',
      component: () => import('../views/countries/Turkiye.vue')
    },
    {
      path: '/turkmenistan',
      name: 'turkmenistan',
      component: () => import('../views/countries/Turkmenistan.vue')
    },
    {
      path: '/azerbaijan',
      name: 'azerbaijan',
      component: () => import('../views/countries/Azerbaijan.vue')
    },
    {
      path: '/hungary',
      name: 'hungary',
      component: () => import('../views/countries/Hungary.vue')
    },
    {
      path: '/kazakhstan',
      name: 'kazakhstan',
      component: () => import('../views/countries/Kazakhstan.vue')
    },
    {
      path: '/kyrgyzstan',
      name: 'kyrgyzstan',
      component: () => import('../views/countries/Kyrgyzstan.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {

// })

export default router
