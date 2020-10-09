<template>
  <div class="navs">
    <span
      v-for="(item, index) in classifyList.categoryL1List"
      :key="index"
      :class="activeIndex === index ? 'active' : ''"
      @click="onActive(index)"
      >{{ item.name }}</span
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Navs",

  data() {
    return {
      // activeIndex: true,
      activeIndex: 0,
      recommendList: [
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
        "推荐专区",
      ],
      idClass: [
        11,
        109217021,
        1005000,
        1010000,
        1005002,
        1013001,
        1011000,
        109243029,
        1043000,
        1019000,
      ],
    };
  },
  computed: {
    ...mapState(["classifyList"]),
  },
  methods: {
    ...mapActions(["getClassifyList"]),
    onActive(index) {
      this.activeIndex = index;
      this.getClassifyList(this.idClass[index]);
    },
  },
  created() {
    this.getClassifyList(11);
  },
};
</script>

<style lang="less" scoped>
.navs {
  width: 1.62rem;
  height: calc(100vh - 0.88rem - 55px);
  border-right: 0.01rem solid #eeeeee;
  padding: 0.1rem 0.15rem 1rem 0.25rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0.88rem;
  span {
    font-size: 0.28rem;
    color: #333;
  }
  span.active {
    color: #ab2b2b;
  }
}
</style>