<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import axios from 'axios'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  name: 'Swiper',
  data () {
    return {
      banners: []
    }
  },
  created () {
    const url = '/index/xhr/index.json?__timestamp=1601030102410'
    axios
      .get(url)
      .then((res) => {
        this.banners = res.data.data.data.focusList
        // console.log(this.banners);
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.swiper {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 7.5rem;
      height: 3.7rem;
    }
  }
}
</style>
