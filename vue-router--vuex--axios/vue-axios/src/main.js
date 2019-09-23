import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// 1. axios的基本使用,默认是 get 请求
// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/api/v1/home/multidata',
//   method: 'get'  // 用method方法 手动配置 get 请求,写post 就是 post 请求
// }).then(res => {
//   console.log(res)
// })

// 也可以这么来写,进行 get post 等请求  另一种写法
// axios.get()

// 可以写参数的 axios 请求方式 params里面写参数
// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/api/v1/home/data',
//   // 专门针对 get 请求的参数拼接
//   params: {        // 参数:
//     type: 'pop',     // 类型
//     page: 1          // 页面
//   }
// }).then(res => {
//   console.log(res)
// })




// 2. 使用全局的 axios 发送并发请求  配置baseURL和'application/x-www-form-urlencoded'和超时时间等等 这样配置太麻烦,一般来说,直接进行全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/v1'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   // baseURL: 'http://123.207.32.32:8000/api/v1',     // 设置域名  // 有了全局配置.这里就不需要配置了
//   // timeout: 5,     // 设置超时时间
//   url: '/home/multidata'
// }), axios({
//   // baseURL: 'http://123.207.32.32:8000/api/v1',
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// })])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))
//   // 下面这样的也可以
//   // .then(results => {
//   //   console.log(results[0])
//   //   console.log(results[1])
//   // })  



  // 3. 创建对应的 axios 的 实例
  // const instance1 = axios.create({
  //   baseURL: 'http://123.207.32.32:8000/api/v1',
  //   timeout: 5000
  // })

  // instance1({
  //   url: '/home/multidata'
  // }).then(res => {
  //   console.log(res)
  // })

  // instance1({
  //   url: '/home/data',
  //   params: {
  //     type: 'pop',
  //     page: 1
  //   }
  // }).then(res => {
  //   console.log(res)
  // })

// 另外一个 axios 实例
  // const instance2 = axios.create({
  //   baseURL: 'http://222.111.33.33:8000',
  //   timeout: 5000,
  //   // headers: {  }
  // })


  // 4. 封装 request 模块
  import {request} from './network/request'

  // 最终封装方式的用法
  request({
    url: '/home/multidata'
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })  


  // Promise封装方式的用法
  // request({
  //   url: '/home/multidata'
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })


  // 第一种封装方式的用法
  // request({
  //   url: '/home/multidata'
  // }, res => {
  //   console.log(res)
  // }, err => {
  //   console.log(err)
  // })

  // 第二种封装方式的用法
  // request({
  //   baseConfig: {

  //   },
  //   success: function (res) {

  //   },
  //   failure: function (err) {

  //   }
  // })