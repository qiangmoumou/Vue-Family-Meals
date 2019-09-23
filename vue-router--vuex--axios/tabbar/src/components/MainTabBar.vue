<template>
  <tab-bar>
      <!-- 插入插槽 -->            <!-- 绑定一个属性 用父组件传值的方式拿 不写不传值，默认就是红色，在 TabBarItem 组件里面操作了逻辑 -->        
      <tab-bar-item path="/home" activeColor="blue">
        <!-- 这里又是插入插槽 -->   <!-- assets 经过了路径配置 src/assets  @是 src  但是注意在起的这个别名的前面必须加上 ~ 符号, 因为这里是 DOM 中 -->
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
               <!-- path 是个 属性绑定, 因为后面等于的是 一个字符串 而非 js 表达式, 所以这里不需要 绑定: 直接普通属性就行  用父组件传值的方式拿 -->
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/fl.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/fl-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shopping.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopping-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/me.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/me-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
 
<script>
  import TabBar from 'components/tabbar/TabBar.vue'
  import TabBarItem from 'components/tabbar/TabBarItem.vue'
  export default {
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
 
<style scoped>
  
</style>