import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WatchPage from '@/views/WatchPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: "/watch",
    name: 'Watch',
    component: WatchPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
