import { createRouter, createWebHistory } from 'vue-router' // Importing necessary functions from vue-router

import adminRoutes from './routes.admin'
import customerRoutes from './routes.customer'
import crazyclownRoutes from './routes.crazyclown.ts'
import publicRoutes from './routes.public.ts'

const routes = [customerRoutes, adminRoutes, publicRoutes, crazyclownRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
})

export default router
