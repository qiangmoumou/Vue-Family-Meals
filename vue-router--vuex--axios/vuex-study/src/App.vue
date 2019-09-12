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


    <h5>--------Hello Vuex内容----------</h5>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'

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
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {   // 调用 vuex的 Mutation 传参
        // 参数被称为是 mutation 的载荷 payload: (负载)
        this.$store.commit('incrementCount', count)   // 参数怎么传
      },
      addStudent() {
        const stu = {id: 114, name: 'alan', age: 70}  // 把这个当做参数了
        this.$store.commit('addStudents', stu)   // 也能这样传值
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
