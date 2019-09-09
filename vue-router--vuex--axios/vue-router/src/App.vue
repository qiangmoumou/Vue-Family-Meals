<template>
  <div id="app">
    <!-- tag="div"  可以把router-link 渲染成 div 标签显示 -->
    <!-- 默认是 history.pushState 所以有历史记录, 如果不想要历史记录不想让用户点击返回建 就换成 hostory.replaceState    在这里直接在 router-link 里面 写 replace 就行 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- 为了演示,先把这两给注释掉 -->
    <!-- <router-link :to="'/user/' + abc" tag="button" replace>用户</router-link>
    <router-link :to="{ path: '/profile', query: {name: 'wht', age: 18, height: 1.88} }">档案</router-link> -->

    <!-- 如果切换不想用 router-link  也可以换成 点击事件, 在我们的 script 里面定义一下 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->


    <!-- 也可以通过点击定义一个方法的方式 进行路由修改和传参 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      abc: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push ==> pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    // 进行路由修改和传参
    userClick() {
      this.$router.push('/user/' + this.abc)
    },
    profileClick() {
      this.$router.push({
          path: '/profile',
          query: {
            name: 'kebo',
            age: 19,
            height: 1.87
          }
        })
    }
  }
}
</script>

<style>
  .active{
    color:red;
  }
</style>
