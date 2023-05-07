import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {   
    path: '/catalog/:code',
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
  {   
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
