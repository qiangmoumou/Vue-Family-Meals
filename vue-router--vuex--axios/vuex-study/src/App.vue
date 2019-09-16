<template>
  <div>
    <h5>--------App内容----------</h5>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>


    <h5>---------------App 内容: getters相关信息----------</h5>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <!-- 获取年龄超过20岁的学生数组 -->
    <h2>{{$store.getters.more20stu}}</h2>
    <!-- 获取年龄超过20岁的学生的个数 -->
    <h2>{{$store.getters.more20stuLength}}</h2>
    <!-- 获取年龄大于 age 的学生  , 这个 age 不写死,可以是别人给我传过来的 age -->
    <h2>{{$store.getters.moreAgeStu(9)}}</h2>

    <h3>---------------App内容：info对象的内容是否是响应式-------------- --</h3>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h3>---------------App内容：modules中的内容----------------</h3>
    <!-- 因为是在模块里面拿的 name , 所以 要 $store.state.a.name 中间有个 a , 这个 a 是 $store 里面 modules 定义的 a 指向的抽离出去定义好的 module -->
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改module里面的名字</button>
    <!-- getters 可以直接调用,不关心 定义在哪里-->
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <!-- actions -->
    <button @click="asyncUpdateName">模块异步修改名字</button>

    <h5>--------Hello Vuex内容----------</h5>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'

  // 导入 store 里面 mutation 方法起的别名
  import {
    INCREMENT,
    DECREMENT
  } from './store/mutation.types'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是App组件',
      }
    },
    methods: {
      addition() {
        // 通过 this.$store.commit('mutation中方法')来修改状态
        //  我们通过提交 mutation 的方式,而非直接改变 $store.state.counter
        //   这是因为 Vuex 可以更明确的追踪状态的变化,所以不要直接改变 store.tate.counter 的值
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit(DECREMENT)
      },
      addCount(count) {   // 调用 vuex的 Mutation 传参
        // 1. 普通的提交风格 (commit)
        // 参数被称为是 mutation 的载荷 payload: (负载)
        // this.$store.commit('incrementCount', count)   // 参数怎么传

        // 2. 特殊的提交风格  
        this.$store.commit({
          type: 'incrementCount',
          count     // count: count
        })
      },
      addStudent() {
        const stu = {id: 114, name: 'alan', age: 70}  // 把这个当做参数了
        this.$store.commit('addStudents', stu)   // 也能这样传值
      },
      updateInfo() {
        // this.$store.commit('updateInfo')

        // 异步操作(想办法要经过 actions,然后再让 actions 里面的方法去调 mutation 里的方法), 获取 Actions 里面的方法名
        // this.$store.dispatch('aUpdateInfo', {     // 这样,传参和回调的方式不优雅,我们把这个注释掉,来个优雅的做法
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了')
        //   }
        // })

        // 有的传参和回调   this.$store.dispatch('Actions里面的方法')
        this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(res => {     // this.$store.dispatch调完 actions 里面的方法 aUpdateInfo 这个方法,返回的是 一个 new Promise , 因为这里是个 Promise, 而且也 resolve给 then()了 , 所以这里直接可以跟 then()
          console.log('里面已经完成了提交')
          console.log(res)
        })
      },
      // modules 
      updateName() {
        this.$store.commit('updetaName', 'lisi')
      },
      // modules actions
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    },
    computed: {
      // 曾经的做法,因为操作的是 vuex的状态数据,所以我们不用 computed 的计算属性,我们要用 vuex里面的 getters去操作
      // more20stu() {
      //   return this.$store.state.students.filter(s => {
      //     return s.age >= 20
      //   })
      // }
    }
  }  
</script>

<style>

</style>
