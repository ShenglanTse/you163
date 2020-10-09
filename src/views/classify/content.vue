<template>
  <div class="content">
    <!-- 背景图开始 -->
    <div class="banner">
      <van-swipe
        v-if="classifyList.currentCategory"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          v-for="(item, index) in classifyList.currentCategory.bannerList"
          :key="index"
          ><img :src="item.picUrl" alt=""
        /></van-swipe-item>
        <!-- <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item> -->
      </van-swipe>
      <!-- <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe> -->
    </div>
    <!-- 背景图结束 -->

    <!-- item详情开始 -->
    <div class="cateList">
      <!-- 1.下面数据取得有问题，需要重新梳理一哈，这里是标题数据，而且有的板块有有滴没有 2.每一个子模块里面，分为两部分，图片数据和描述数据-->
      <!-- <div class="hd">{{ item.name }}</div> -->
      <ul
        class="list"
        v-for="(item, index) in classifyList.categoryL2List"
        :key="index"
      >
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img :src="item.wapBannerUrl" alt="" />
          </div>
          <div class="name">{{ item.name }}</div>
        </li>
      </ul>
      <!-- <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/78c6f5437b032f2cfd9be02b5e8f5d65.jpg?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">口碑好物</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/526383123476cde0fd52168455cbd43b.jpg?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">抑菌防螨</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/c653708703a0bdbbd61c627b87f04f29.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">秋冬换季</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/f02d5acdd84f4b4958b37730341cc3c9.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">收纳好物</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/28179231bfca5100b8efc2b55daa4d64.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">北欧原木</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan-item.nosdn.127.net/4ccd6ee87a83918474e7e962b06d96fd.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">餐厨爆款清单</div>
        </li>
      </ul> -->
    </div>
    <!-- item详情结束 -->

    <!-- <div class="cateList">
      <div class="hd">床上用品</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">床品件套</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/96d109867f08a14af62d2390b7787439.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">被枕盖毯</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/b91e14afc5a138df8dbc3236146d24e6.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">床垫床褥</div>
        </li>
      </ul>
    </div>
    <div class="cateList">
      <div class="hd">家具家装</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
      </ul>
    </div> -->
    <!-- <div class="cateList">
      <div class="hd">家具家装</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
      </ul>
    </div>
    <div class="cateList">
      <div class="hd">家具家装</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
      </ul>
    </div>
    <div class="cateList">
      <div class="hd">家具家装</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
      </ul>
    </div>
    <div class="cateList">
      <div class="hd">家具家装</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
      </ul>
    </div>
    <div class="cateList">
      <div class="hd">家具家装</div>
      <ul class="list">
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
        <li class="cateItem">
          <div class="cateImgWrapper">
            <img
              src="https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png?quality=75&type=webp&imageView"
              alt=""
            />
          </div>
          <div class="name">客餐厅家具</div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import axios from "axios";
import { mapState } from "vuex";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  name: "Content",
  data() {
    return {
      isShow: true,
      //   images: [
      //     "https://yanxuan.nosdn.127.net/259c20157e846d359869c7beeeff349c.jpg?type=webp&imageView&quality=75&thumbnail=0x196",
      //     "https://yanxuan.nosdn.127.net/d8539f2e33e1b3fd795f2a06cb840a80.jpg?type=webp&imageView&quality=75&thumbnail=0x196",
      //   ],
      //   banners: [],
    };
  },
  computed: {
    ...mapState(["classifyList"]),
  },
  //   created() {
  //     let url =
  //       "index/item/cateList.json?__timestamp=1602216638646&categoryId=11";
  //     axios
  //       .get(url)
  //       .then((res) => {
  //         // console.log(res.data.data.currentCategory.bannerList);
  //         this.banners = res.data.data.currentCategory.bannerList;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
};
</script>

<style lang="less" scoped>
.content {
  width: 5rem;
  height: 100vh;
  position: absolute;
  top: 0.88rem;
  bottom: 0.5rem;
  left: 2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  .banner {
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 0.2rem;
      line-height: 2.2rem;
      text-align: center;
      background-color: #39a9ed;
      img {
        width: 5rem;
        height: 2.2rem;
      }
    }
  }
  .cateList {
    padding-top: 0.4rem;
    // background: skyblue;
    display: flex;
    flex-wrap: wrap;
    // .hd {
    //   font-size: 0.28rem;
    //   color: #333;
    //   padding-bottom: 0.16rem;
    //   border-bottom: 1px solid #d9d9d9;
    // }
    .list {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      padding: 0.3rem 0;
      .cateItem {
        .cateImgWrapper {
          img {
            width: 1.44rem;
            margin: 0 0.1rem;
          }
        }
        .name {
          width: 1.44rem;
          height: 0.72rem;
          line-height: 0.72rem;
          font-size: 0.24rem;
          color: #333;
          margin-left: 0.05rem;
        }
      }
    }
  }
}
</style>