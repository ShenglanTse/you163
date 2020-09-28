<template>
  <div class="gift">
    <h1>- 新人专享礼-</h1>
    <div class="left">
      <h3>新人专享礼包</h3>
      <img
        src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
        alt=""
      />
    </div>
    <div class="right-top">
      <div class="right-top-left">
        <h3>福利社</h3>
        <p>今日特价</p>
      </div>
      <div class="right-top-right">
        <img
          src="https://yanxuan-item.nosdn.127.net/ce3944d2699d6add8d482527f92fa9f7.png?quality=75&type=webp&imageView&thumbnail=200x200"
          alt=""
        />
        <div class="discount">
          <span class="new">¥99</span><span class="old">¥129</span>
        </div>
      </div>
    </div>
    <div class="right-bottom">
      <div class="right-bottom-left">
        <h3>新人拼团</h3>
        <p>1元起包邮</p>
      </div>
      <div class="right-bottom-right">
        <img
          src="https://yanxuan-item.nosdn.127.net/0bcb578f8d1380d5e3553559927dc3df.png?quality=75&type=webp&imageView&thumbnail=200x200"
          alt=""
        />
        <div class="discount">
          <span class="new">¥38.3</span><span class="old">¥59</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gift'
}
</script>

<style lang="less" scoped>
.gift {
  height: 5.2rem;
  background: #fff;
  padding: 0 0.28rem 0.28rem;
  margin-bottom: 0.2rem;
  h3 {
    font-weight: 900;
  }
  .discount {
    width: 0.8rem;
    height: 0.8rem;
    background: rgba(236, 168, 95, 0.8);
    position: absolute;
    top: -0.03rem;
    left: 0.8rem;
    border-radius: 50%;
    color: #fff;
    font-size: 0.24rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .old {
      text-decoration: line-through;
    }
  }
  h1 {
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    color: #333;
    font-size: 0.32rem;
  }
  .left {
    width: 3.44rem;
    height: 4rem;
    background: #f9e9cf;
    float: left;
    margin-right: 0.08rem;
    // margin-bottom: 0.3rem;
    h3 {
      padding: 0.3rem 0 0 0.3rem;
      font-size: 0.32rem;
      color: #333;
    }
    img {
      width: 2.58rem;
      height: 2.58rem;
      margin-top: 0.4rem;
      margin-left: 0.4rem;
    }
  }
  .right-top {
    width: 3.42rem;
    height: 2.14rem;
    background: #f7e3d5;
    float: left;
    margin-bottom: 0.08rem;
    padding: 0.2rem 0 0 0.2rem;
    position: relative;
    .right-top-left {
      h3 {
        font-size: 0.32rem;
        color: #333;
      }
      p {
        font-size: 0.24rem;
        color: #7f7f7f;
      }
    }
    .right-top-right {
      position: absolute;
      top: 0.2rem;
      left: 1.4rem;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .right-bottom {
    width: 3.42rem;
    height: 1.78rem;
    background: #fcecc7;
    float: left;
    padding: 0.2rem 0 0 0.2rem;
    position: relative;
    .right-bottom-left {
      h3 {
        font-size: 0.32rem;
        color: #333;
      }
      p {
        display: inline-block;
        font-size: 0.24rem;
        // color: #7f7f7f;
        color: #fff;
        background: #c8b697;
      }
    }
    .right-bottom-right {
      position: absolute;
      top: 0.2rem;
      left: 1.4rem;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
