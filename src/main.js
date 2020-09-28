import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'

// const isDebug = true
const isDebug = false
if (isDebug) {
  new VConsole()
}

// 登录拦截
// router.beforeEach((to, from, next) => {
//   if (to.path === '/user') {
//     if (localStorage.getItem('isLogin')) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

// 登录拦截

router.beforeEach((to, from, next) => {
  if (to.path === '/cart' || to.path === '/user') {
    // console.log('你要前往购物中心或用户中心')
    if (localStorage.getItem('isLogin')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
