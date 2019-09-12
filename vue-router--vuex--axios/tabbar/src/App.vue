<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  // components 经过了路径配置 src/components  (@是 src)  但是 如果是 src 引用而非是 import 引用的路径的话, 就得在 components 前面加上 ~ 符号   // 此配置在 build/webpack.base.config.js 第25行配置
  import MainTabBar from 'components/MainTabBar.vue'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
