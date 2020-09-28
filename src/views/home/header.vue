<template>
  <div class="header">
    <div class="h_search">
      <h3>网易严选</h3>
      <div @click="clickSearch">
        <van-icon name="search" />
        <span>搜索商品, 共38411款好物</span>
      </div>
      <p @click="onLogin">登录</p>
    </div>
    <div class="h_navs">
      <div class="navs">
        <div class="wrapper" ref="wrapper">
          <ul class="content">
            <li
              v-for="(item, index) in navs"
              :key="index"
              :class="showIndex === index ? 'active' : ''"
              @click="clickNavs(index, $event)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <p @click="clickDown">
        <van-icon name="arrow-down" :class="toggleRotate ? 'rotate' : ''" />
        <van-popup
          :overlay-style="{ top: '0.88rem' }"
          v-model="toggleRotate"
          position="top"
          :style="{ height: '30%' }"
          ><h3>全部频道</h3>
          <div class="popList">
            <li
              v-for="(item, index) in navs"
              :key="index"
              :class="showIndex === index ? 'active' : ''"
            >
              {{ item }}
            </li>
          </div>
        </van-popup>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Popup } from 'vant'
import BScroll from 'better-scroll'

Vue.use(Popup)
Vue.use(Icon)

export default {
  name: 'Header',
  data () {
    return {
      navs: [
        '推荐',
        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '个护清洁',
        '母婴亲子',
        '运动旅行',
        '数码家电',
        '严选全球'
      ],
      showIndex: 0,
      toggleRotate: false
    }
  },
  methods: {
    clickNavs (index, e) {
      this.showIndex = index
      this.scroll.scrollToElement(e.target, 0, 0)
    },
    clickDown () {
      this.toggleRotate = !this.toggleRotate
    },
    clickSearch () {
      this.$router.push('/search')
    },
    onLogin () {
      this.$router.push('/login')
      console.log('login')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      scrollX: true
    })
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: #fff;
  width: 7.5rem;
  .h_search {
    height: 0.88rem;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 0.36rem;
      font-family: PingFangSC-Light, helvetica, Heiti SC;
    }
    div {
      width: 4.42rem;
      padding: 0.1rem 0.4rem;
      background: #ededed;
      border-radius: 0.1rem;
      margin: 0 0.2rem;
      display: flex;
      align-items: center;
      span {
        margin-left: 0.1rem;
        font-size: 0.24rem;
        color: #666;
      }
    }
    p {
      width: 0.74rem;
      text-align: center;
      font-size: 0.24rem;
      font-family: PingFangSC-Light, helvetica, Heiti SC;
      color: #dd1a21;
      border: 1px solid #dd1a21;
      border-radius: 0.05rem;
    }
  }
  .h_navs {
    position: relative;
    .navs {
      overflow: hidden;
      padding-left: 0.4rem;
      .wrapper {
        width: 6.5rem;
        height: 0.6rem;
        .content {
          width: 260%;
          height: 0.6rem;
          display: flex;
          align-items: center;
          li {
            margin-right: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.28rem;
            color: #333;
          }
          li.active {
            border-bottom: 0.04rem solid #dd1a21;
            color: #dd1a21;
          }
        }
      }
    }
    p {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.2rem;
      height: 0.6rem;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        transition: all 0.3s;
        z-index: 9999;
      }
      .rotate {
        transform: rotate(180deg);
      }
      .van-popup {
        top: 0.88rem;
        // border-top: 0.01rem solid #999;
        padding: 0.3rem;
        h3 {
          font-size: 0.28rem;
          color: #333;
          margin-bottom: 0.2rem;
        }
        .popList {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 1.4rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin: 0 0 0.4rem 0.26rem;
            font-size: 0.24rem;
            color: #333;
            border: 0.01rem solid #999;
            text-align: center;
          }
          li.active {
            color: #dd1a21;
            border: 0.01rem solid #dd1a21;
          }
        }
      }
    }
  }
}
</style>
