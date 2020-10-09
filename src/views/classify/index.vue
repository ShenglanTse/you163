<template>
  <div class="classify">
    <Header></Header>
    <Navs></Navs>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "./header";
import Navs from "./navs";
import Content from "./content";

export default {
  name: "Classify",
  components: {
    Header,
    Footer,
    Navs,
    Content,
  },
};
</script>

<style lang="less" scoped>
.classify {
  position: relative;
}
</style>
