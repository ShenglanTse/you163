<template>
  <div class="header">
    <!-- <h1>分类头部</h1> -->
    <div>
      <van-icon name="search" @click="clickSearch" />
      <span @click="goSearch">{{ searchVal }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchVal: "搜索商品, 共39493款好物",
    };
  },
  methods: {
    clickSearch() {
      console.log("点击搜索" + this.searchVal);
    },
    goSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 7.5rem;
  height: 0.88rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 0.01rem solid #eeeeee;
  position: fixed;
  z-index: 9999;
  div {
    width: 100%;
    padding: 0.1rem 0.24rem;
    background: #eee;
    border-radius: 0.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.28rem;
    color: #999;
    i {
      // color: red;
      // font-size: 0.28rem;
    }
    span {
      margin-left: 0.1rem;
    }
  }
}
</style>