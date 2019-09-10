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
        path: '/home/news'
      }
    },
    // 每个页面都得这么改,太太太麻烦了,所以我们基于它们都是路由 调转 , 可以做一些简单的事情(全局导航守卫),在 路由index.js里面做
    // created() {
    //   document.title = '首页'
    // }
        // 因为 App组件里面的   <router-view> 被keep-alive包着  , 所以 这个组件就不会反复执行创建和销魂了 
        created() {       // data 和 mounted 已经初始化完成
          console.log('home created')
        },
        destroyed() {     // 销毁的生命周期函数   
          console.log('home destroyed')
        },
  // 解决离开时,home里面的新闻回来还是新闻,如果是消息离开的,回来还是消息
    // activated 和 deactivated 这两个函数, 只有 改组件被保持了状态使用了 keep-alive 才有效  ==> 在 App组件里, 被包裹了
    activated() {     // 活跃的
      // 回来的时候在把这个 this.path = this.$route.path 给 this.$router.push 添加进去
      // console.log('activated')
      this.$router.push(this.path)
    },
      // deactivated() {   // 不活跃的
      //   // console.log('deactivated')
      //   this.path = this.$route.path   // 获取到的是活跃的 , 所以太晚了
      // },
    beforeRouteLeave (to, from, next) {
      // 首页中使用 path 属性记录离开时的路径,在beforeRouteLeave中记录
      // console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
    
  }
</script>
 
<style scoped>
  
</style>