import { createRouter, createWebHistory } from 'vue-router' // Importing necessary functions from vue-router

import adminRoutes from './routes.admin' // Importing admin routes
import customerRoutes from './routes.customer' // Importing routes from the routes file
import crazyclownRoutes from './routes.crazyclown.ts'

const routes = [customerRoutes, adminRoutes, crazyclownRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Using createWebHistory for HTML5 history mode
  routes, // Registering the imported routes
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
})

export default router
