import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/admin',
    name: 'admin',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/products',
    name: 'products',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPageView.vue')
  },
  {
    path: '/display/:id',
    name: 'display',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/DisplayView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateAccountView.vue')
  },
  {
    path: '/userpage',
    name: 'userpage',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPageView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
