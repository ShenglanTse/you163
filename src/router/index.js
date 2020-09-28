import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/classify',
  name: 'classify',
  component: () => import(/* webpackChunkName: "classify" */ '../views/classify')
},
{
  path: '/buying',
  name: 'buying',
  component: () => import(/* webpackChunkName: "classify" */ '../views/buying')
},
{
  path: '/cart',
  name: 'cart',
  component: () => import(/* webpackChunkName: "classify" */ '../views/cart')
},
{
  path: '/user',
  name: 'user',
  component: () => import(/* webpackChunkName: "classify" */ '../views/user')
},
{
  path: '/search',
  name: 'search',
  component: () => import(/* webpackChunkName: "classify" */ '../components/Search')
},
{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "classify" */ '../components/Login')
},
{
  path: '*',
  name: '404',
  component: () => import('../views/error/404')
}
]

const router = new VueRouter({
  routes
})

export default router
