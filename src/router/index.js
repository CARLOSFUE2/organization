import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import System from '../views/System.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/system',
    name: 'System',
    component: System
  }
]

const router = new VueRouter({
  routes
})

export default router
