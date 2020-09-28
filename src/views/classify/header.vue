<template>
  <div class="header">
    <!-- <h1>分类头部</h1> -->
    <div @click="clickSearch">
      <van-icon name="search" />
      <span>搜索商品, 共38411款好物</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    clickSearch() {
      console.log("BMW");
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
        background: hotpink;
    }
</style>