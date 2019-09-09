<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容,哈哈哈dfd</p>

    <!-- 嵌套组件,这里必须的写 全的路由地址 /home/news  已经在index.js 里面配置路由了 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>
 
<style scoped>
  
</style>