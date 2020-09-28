<template>
  <div class="search">
    <div class="search-top">
      <div class="search-inp">
        <van-icon name="search" />
        <input type="text" v-model="keyword" @keydown.enter="onSearch()" />
      </div>
      <div class="search-cancel" @click="onCancel">取消</div>
    </div>
    <div class="search-bottom">
      <div class="hot-search">热门搜索</div>
      <div class="hot-list">
        <ul class="hot-item">
          <!-- <li>阳澄湖大闸蟹</li> -->
          <!-- <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li>
          <li>阳澄湖大闸蟹</li> -->
          <li
            v-for="(item, index) in hotList"
            :key="index"
            :class="item.highlight === 1 ? 'highlight' : ''"
          >
            {{ item.keyword }}-{{ item.highlight }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      hotList: []
      //   highlight: 0,
    }
  },
  methods: {
    onSearch () {
      //   console.log("search for:" + this.keyword);
      console.log('向服务器请求商品参数为: ' + this.keyword)
    },
    onCancel () {
      console.log('cancel')
      this.$router.push('/')
    }
  },
  //   created() {
  //     let url = "/index/xhr/index.json?__timestamp=1601030102410";
  //     axios
  //       .get(url)
  //       .then((res) => {
  //         this.banners = res.data.data.data.focusList;
  //         // console.log(this.banners);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  created () {
    const url = '/index/xhr/search/init.json'
    // console.log(url);
    axios.get(url).then((res) => {
      // console.log(res.data.data.defaultKeyword.keyword)
      this.keyword = res.data.data.defaultKeyword.keyword
      //   console.log(res.data.data.hotKeywordVOList);
      this.hotList = res.data.data.hotKeywordVOList
      console.log(this.hotList)
      //   console.log(this.keyword);
    })
  }
}
</script>

<style lang="less" scoped>
// html,
// body {
//   width: 100%;
//   height: 100%;
// }
.search {
  width: 7.5rem;
  //   height: 100%;
  height: 100vh;
  background: #eeeeee;
  .search-top {
    background: #fff;
    width: 7.5rem;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .search-inp {
      width: 6.04rem;
      height: 0.56rem;
      line-height: 0.56rem;
      background: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        margin-right: 0.16rem;
      }
      input {
        width: 5.2rem;
        height: 0.4rem;
        border: none;
        background: #f4f4f4;
        color: #333;
        font-size: 0.28rem;
      }
    }
    .search-cancel {
      font-size: 0.28rem;
      color: #333;
    }
  }
  .search-bottom {
    width: 7.5rem;
    height: 3.57rem;
    background: #fff;
    padding: 0.3rem 0.3rem 0.3rem;
    .hot-search {
      font-size: 0.28rem;
      color: #999;
    }
    .hot-item {
      height: 2.37rem;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.3rem;
      justify-content: space-between;
      li {
        padding: 0.15rem;
        height: 0.6rem;
        margin-right: 0.2rem;
        margin-bottom: 0.3rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.05rem;
        font-size: 0.24rem;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li.highlight {
        color: #cc342e;
        border: 1px solid #cc342e;
      }
    }
  }
}
</style>
