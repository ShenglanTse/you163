<template>
  <div class="login">
    <div class="head">
      <h1>网易严选</h1>
      <van-icon name="wap-home-o" class="wap-home-o" @click="backHome" />
      <van-icon name="search" class="search" />
      <van-icon name="shopping-cart-o" class="shopping-cart-o" />
    </div>
    <div class="main">
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>

      <div class="count">
        <van-button type="danger" class="phoneLogin"
          ><van-icon name="desktop-o" />手机快捷登录</van-button
        >
        <van-button plain type="primary" class="emailLogin">
          <van-icon name="envelop-o" />
          邮箱账号登录</van-button
        >
      </div>
    </div>
    <div class="foot">
      <li><van-icon name="comment-circle" />微信</li>
      <li><van-icon name="friends" />QQ</li>
      <li><van-icon name="goods-collect" />微博</li>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
export default {
  name: 'Login',
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 7.5rem;
  height: 100vh;
  background: #f3f5f4;
  position: relative;
  .head {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    background: lightcyan;
    h1 {
      font-size: 0.4rem;
      font-family: PingFangSC-Light, helvetica, "Heiti SC";
      color: #333;
      background: #fafafa;
    }
    .wap-home-o {
      position: absolute;
      left: 0.2rem;
      top: 0.18rem;
      font-size: 0.6rem;
    }
    .shopping-cart-o {
      position: absolute;
      right: 0.2rem;
      top: 0.18rem;
      font-size: 0.6rem;
    }
    .search {
      position: absolute;
      right: 1rem;
      top: 0.18rem;
      font-size: 0.6rem;
    }
  }
  .main {
    .logo {
      padding: 3rem 0;
      // background: hotpink;
      img {
        width: 2.66rem;
        height: 0.9rem;
        // background: lightblue;
        margin: 0 auto;
      }
    }
    .count {
      text-align: center;
      font-size: 0.14rem;
      .phoneLogin,
      .emailLogin {
        width: 7rem;
        margin-bottom: 0.3rem;
      }
      i {
        vertical-align: middle;
        margin-top: -0.04rem;
      }
      .emailLogin {
        color: #dd1a21;
        border: 0.01rem solid #dd1a21;
        background: #f3f5f4;
      }
    }
  }
  .foot {
    margin-top: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.1rem;
      border-right: 0.02rem solid #7f7f7f;
      color: #7f7f7f;
      i {
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
