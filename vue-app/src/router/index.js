import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


//router sırayla çalışır, hiçbiriyle matchleşmeşse home'a gider.
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
