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


// 配置路由规则
const routes = [
  // 配置路由和组件之间的应用关系
  {
    path: '',
    // redirect重定向: 这里给的是 url 地址
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // 配置元字段 meta ==> 描述数据的数据
    meta: {
      title: '首页'
    },
    // 路由嵌套
    children: [
    // 解决离开时,home里面的新闻回来还是新闻,如果是消息离开的,回来还是消息, 所以把这里的默认 重定向 先注释掉  
      // 嵌套的默认路径
      // {
      //   path: '',
      //   redirect: 'news'    // 谨记,嵌套里面的 地址 前面可千万不能加 / 
      // },
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
    component: About,
    meta: {
      title: '关于'
    },
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      console.log('about veforeEnter')
      next()
    }
  },
  {
    // 配置动态 路由地址    但是对应的在 组件 router-link to 也得写上对应id内容
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '详情'
    },
  }
]

// 2. 创建 Router 对象

const router = new Router({
  // 把配置好的 路由匹配规则 挂载到 router 实例上
  routes,
  // 这里默认的是 hash 修改 URL 的模式, 但是 老有一个 # 号,不好看, 所以现在选择了 H5 的 history
  mode: 'history',
  linkActiveClass: 'active',

})

  // 全局导航守卫
  //  前置钩子(前置守卫 guard)
  router.beforeEach((to, from, next) => {
    // to: 即将要进入的目标的路由对象
    // from: 当前导航即将要离开的路由对象
    // next: 调用该方法后,才能进入下一个钩子

    // 从 from 跳转到 to
    document.title = to.matched[0].meta.title     // 一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched

    // 无论什么时候必须的调用一下 next 
    next()
  })

  //  后置钩子 (hook)
  // 如果是后置钩子,也就是 afterEach , 不需要主动调用 next() 函数
  router.afterEach((to, from) => {
    console.log('-----')
  })

// 上面我们使用的导航守卫,被称之为 全局守卫 

// 还有 路由独享的守卫 和 组件内的守卫


// 3. 将 Router 对象传入到 Vue 实例
export default router
