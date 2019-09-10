<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <!-- 插入插槽 -->            <!-- 不写不传值，默认就是红色，在 TabBarItem 组件里面操作了逻辑 -->        
      <tab-bar-item path="/home" activeColor="blue">
        <!-- 这里又是插入插槽 -->
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/fl.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/fl-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/shopping.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopping-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/me.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/me-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar.vue'
  import TabBarItem from './components/tabbar/TabBarItem.vue'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
