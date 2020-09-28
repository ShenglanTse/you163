<template>
  <div class="footer">
    <van-tabbar route>
      <van-tabbar-item
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.path"
        :icon="item.icon"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  name: 'Footer',
  data () {
    return {
      tabs: [
        { path: '/', title: '首页', icon: 'wap-home-o' },
        { path: '/classify', title: '分类', icon: 'bag-o' },
        { path: '/buying', title: '值得买', icon: 'send-gift-o' },
        { path: '/cart', title: '购物车', icon: 'shopping-cart-o' },
        { path: '/user', title: '个人', icon: 'user-o' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  .van-tabbar-item--active {
    color: #dd1a21;
  }
}
</style>
