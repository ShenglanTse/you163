<template>
  <div class="copyright">
    <div class="download">
      <a
        href="http://m.you.163.com/downloadapp?_stat_from=web_search_baidu&appAwakeUrl=http%3a%2f%2fm.you.163.com"
        >下载APP</a
      ><a
        href="https://you.163.com/?_m_forcepc_=true&_m_anonid_=e51c339e-4aa9-46a0-8cca-571ea8d6a2bb"
        style="margin-right: 0"
        >电脑版</a
      >
    </div>
    <p class="cp">
      网易公司版权所有 © 1997-2020<br />
      食品经营许可证：JY13301080111719
    </p>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="less" scoped>
.copyright {
  .download {
    width: 7.5rem;
    height: 1.22rem;
    background: #414141;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: inline-block;
      width: 1.72rem;
      height: 0.62rem;
      line-height: 0.62rem;
      border: 0.01rem solid #ccc;
      color: #fff;
      font-size: 0.24rem;
      text-align: center;
      margin-right: 0.5rem;
    }
  }
  .cp {
    width: 7.5rem;
    height: 1.22rem;
    background: #414141;
    color: #999;
    font-size: 0.12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
