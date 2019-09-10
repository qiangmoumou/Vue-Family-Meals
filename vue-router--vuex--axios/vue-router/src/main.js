import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 所有的组件都继承自 Vue类 的原型
// Vue.prototype.test = function () {
//   console.log('test')
// }

// 对应在 User.vue 组件中写了触发
// 因为顺序问题, $router 应该不是 '哈哈哈', 但是如果放在new Vue下面 可就不一定了 
// Vue.prototype.$router = '哈哈哈'
// 所以为了不扰乱 我们还是起个别的名字吧
Vue.prototype.name = 'me'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 这是全局的一个 路由
console.log(router)


// 对应在 User.vue 组件中写了触发
// 新方法的认识
  // const obj = {
  //   name: 'why'   // 这是以前给一个对象添加属性的方法
  // }

  // // 通过这样的方法给 obj 定义一个新的属性
  // Object.defineProperty(obj, 'age', 18)

