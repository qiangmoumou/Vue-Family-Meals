import Vue from 'vue'
import Router from 'vue-router'

// 导入要配置的组件
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 1. 安装插件
Vue.use(Router)

// 配置路由规则
const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2. 创建路由对象
const router = new Router({
  routes,
  mode: 'history'
})

// 导出路由对象
export default router
