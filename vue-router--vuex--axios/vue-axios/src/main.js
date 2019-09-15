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


// 1. axios的基本使用
// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/api/v1/home/multidata',
// }).then(res => {
//   console.log(res)
// })

// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/api/v1/home/data',
//   // 专门针对 get 请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })




// 2. axios 发送并发请求  配置baseURL和'application/x-www-form-urlencoded'和超时时间等等 这样配置太麻烦,一般来说,直接进行全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([axios({
  // baseURL: 'http://123.207.32.32:8000',     // 设置域名  // 有了全局配置.这里就不需要配置了
  // timeout: 5,     // 设置超时时间
  url: '/api/v1/home/multidata'
}), axios({
  // baseURL: 'http://123.207.32.32:8000',
  url: '/api/v1/home/data',
  params: {
    type: 'sell',
    page: 3
  }
})])
  .then(axios.spread((res1, res2) => {
    console.log(res1)
    console.log(res2)
  }))
  // 下面这样的也可以
  // .then(results => {
  //   console.log(results[0])
  //   console.log(results[1])
  // })  