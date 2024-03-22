import Login from '@/pages/auth/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      layout: 'auth',
      requiresAuth: false
    }
  },
]

export default routes
