<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <Classify></Classify>
    <Hotlist></Hotlist>
    <Gift></Gift>
    <Gift></Gift>
    <Gift></Gift>
    <Gift></Gift>
    <Gift></Gift>
    <Gift></Gift>
    <Copyright></Copyright>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "./header";
import Swiper from "./swiper";
import Classify from "./classify";
import Hotlist from "./hotlist";
import Gift from "./gift";
import Copyright from "./copyright";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    Swiper,
    Classify,
    Hotlist,
    Gift,
    Copyright,
  },
};
</script>

<style lang="less" scoped>
.home {
  padding: 1.48rem 0 0.5rem 0;
  background: #eeeeee;
}
</style>
