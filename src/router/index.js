import { createRouter, createWebHistory } from 'vue-router'
import viewpersonal from '../views/viewpersonal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: viewpersonal
    },
    {
      path: '/skill',
      name: 'skill',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/viewskill.vue')
    }
    // {
    //   path: '/sosmed',
    //   name: 'sosmed',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/sosmed.vue')
    // }
  ]
})

export default router
