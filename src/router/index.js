import { createRouter, createWebHistory } from 'vue-router'

import Auth from "./modules/auth"
import Dashboard from "./modules/dashboard"

const baseRoutes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(Auth, Dashboard)
})

export default router
