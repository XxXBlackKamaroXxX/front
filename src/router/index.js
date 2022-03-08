import { createRouter, createWebHistory } from 'vue-router'

import LoginFormView from '../views/LoginFormView.vue'
import AboutView from '../views/About.vue'
import UserView from '../views/User.vue'
import AdminView from '../views/AdminWindow.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginFormView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/User',
    name: 'User',
    component: UserView,
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
