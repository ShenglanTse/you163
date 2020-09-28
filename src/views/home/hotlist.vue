<template>
  <div class="hotlist">
    <img
      src="https://yanxuan.nosdn.127.net/10518c38e59180832e2b322baf8dd919.gif"
      alt=""
    />
    <div class="hot">
      <img
        src="https://yanxuan.nosdn.127.net/48de429d6e161e86e314ebf0f7a000bf.png?quality=75&type=webp&imageView&thumbnail=250x0"
        alt=""
      />
      <img
        src="https://yanxuan.nosdn.127.net/8d03625c12bec7215be7850bc518e1ff.png?quality=75&type=webp&imageView&thumbnail=250x0"
        alt=""
      />
      <img
        src="https://yanxuan.nosdn.127.net/bddcbc3b54b074cf9e50bf7daeb5798d.png?quality=75&type=webp&imageView&thumbnail=250x0"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.hotlist {
  background: #eeeeee;
  img {
    width: 7.5rem;
    height: 3.21rem;
  }
  .hot {
    display: flex;
    justify-content: space-evenly;
    // padding: 0.1rem 0.28rem;
    padding: 0.2rem 0.28rem;
    padding-bottom: 0.3rem;
    img {
      width: 2.28rem;
      height: 2.2rem;
      margin: 0 0.05rem;
    }
  }
}
</style>
