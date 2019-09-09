import Vue from 'vue'
import Router from 'vue-router'

// 1. 通过 Vue.use(插件),安装插件
Vue.use(Router)

// 当文件非常多的时候一起加载会非常的慢,所以不采用这样的方式导入
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'


// 我们要用懒加载的方式导入
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')
const News = () => import('../components/News.vue')
const Message = () => import('../components/Message.vue')


// 2. 创建 Router 对象
// 3. 将 Router 对象传入到 Vue 实例
export default new Router({
  // 配置路由和组件之间的应用关系
  routes: [
    {
      path: '',
      // redirect重定向: 这里给的是 url 地址
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      // 路由嵌套
      children: [
        // 嵌套的默认路径
        {
          path: '',
          redirect: 'news'    // 谨记,嵌套里面的 地址 前面可千万不能加 / 
        },
        {
          // 所以这里的地址肯定也是不能加 / 的, 会自动的 把 /home加上 news  ==> /home/news
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      // 配置动态 路由地址    但是对应的在 组件 router-link to 也得写上对应id内容
      path: '/user/:id',
      component: User
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  // 这里默认的是 hash 修改 URL 的模式, 但是 老有一个 # 号,不好看, 所以现在选择了 H5 的 history
  mode: 'history',
  linkActiveClass: 'active'
})
