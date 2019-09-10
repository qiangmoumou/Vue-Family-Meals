<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息,嘿嘿嘿</p>
    <!-- <h3>{{ userId }}</h3> -->

    <h3>{{ userId }}</h3>
    <!-- 当然,也可以直接在这里直接拿 , 为什么 不写 this.$route 呢? 因为和这里写插值的原理一样, data里面的值,也是直接写就哦了,一样的原理 -->
    <h3>{{ $route.params.id }}</h3>

    <!-- $router和$route的区别 -->
    <button @click="btnClick">按钮</button>
  </div>
</template>
 
<script>
  export default {
    name: 'User',
    data () {
      return {
        
      }
    },
    // created() {
    //   document.title = '用户'
    // },
    // 可以用计算属性写方法
    computed: {
      userId() {
        // this.$route 拿到的是目前处于活跃状态的 那个路由  
        // this.$route.params.id 拿到的是 当前活跃状态的那个路由规则的 id 对应的 组件当中的 id 内容 (最终在 url 的 id 内容)
        return this.$route.params.id
      }
    },
    methods: {
      // 按钮方法  $router 和 $route 的区别
      btnClick() {
      // 所有的组件都继承自 Vue类 的原型
        // 全局的 路由: 所以 $router 可以配置 路由规则
        console.log(this.$router)

        // 当前的 活跃路由
        console.log(this.$route)
        // 所有的组件都继承自 Vue类 的原型
        // this.test()

        console.log(this.$router)

        console.log(this.name)
      }
    },
    created() {       // data 和 mounted 已经初始化完成
		  console.log('User created')
		},
		destroyed() {     // 销毁的生命周期函数   
		  console.log('User destroyed')
		}
  }
</script>
 
<style scoped>
  
</style>