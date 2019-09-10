import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 我最好不要在入口文件里面这样写，去引入，太乱，直接写在组件对应的 style 里面用 @import 引入
// require('./assets/css/base.css')