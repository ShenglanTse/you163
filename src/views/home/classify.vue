<template>
  <div class="classify">
    <div class="head">
      <p><van-icon name="free-postage" />网易自营品牌</p>
      <p><van-icon name="certificate" />30天无忧退货</p>
      <p><van-icon name="cash-back-record" />48小时快速退款</p>
    </div>
    <div class="goods">
      <div v-for="(item, index) in goods" :key="index">
        <img :src="item.picUrl" alt="" />
        <h3>{{ item.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Classify',
  data () {
    return {
      goods: []
    }
  },
  created () {
    const url = '/index/xhr/index.json?__timestamp=1601030102410'
    axios
      .get(url)
      .then((res) => {
        this.goods = res.data.data.data.kingKongModule.kingKongList
        // console.log(this.goods);
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.classify {
  background: #ffffff;
  .head {
    height: 0.72rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.24rem;
    color: #333;
    padding: 0.1rem 0.35rem;
    i {
      color: #dd1a21;
      vertical-align: middle;
      margin-right: 0.1rem;
    }
  }
  .goods {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.1rem 0.35rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
      h3 {
        font-size: 0.24rem;
        color: #333;
      }
    }
  }
}
</style>
