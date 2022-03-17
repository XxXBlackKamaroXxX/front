import { createRouter, createWebHistory } from 'vue-router'

import LoginFormView from '../views/LoginFormView.vue'
import AboutView from '../views/About.vue'
import UserView from '../views/User.vue'
import AdminView from '../views/AdminWindow.vue'
import ManageFlight from '../views/ManageFlight.vue'
import SearchFlights from '../views/SearchFlights.vue'
import BookingConformation from '../views/BookingConformation.vue'

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
  },
  {
    path: '/manageFlight',
    name: 'manageFlight',
    component: ManageFlight
  },
  {
    path: '/searchFlights',
    name: 'searchFlights',
    component: SearchFlights
  },
  {
    path: '/bookingConformation',
    name: 'bookingConformation',
    component: BookingConformation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
