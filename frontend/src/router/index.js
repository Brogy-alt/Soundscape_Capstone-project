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
    path: '/logout',
    name: 'logout',
    beforeEnter () {
      router.push({name: 'login'})
      localStorage.removeItem('login_token')
      localStorage.removeItem('user')
      window.local.reload()
    }
  },
  {
    path: '/singleproduct/:id',
    name: 'singleproduct',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProductView.vue')
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
  },
  {
    path: '/cart',
    name: 'cart',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
