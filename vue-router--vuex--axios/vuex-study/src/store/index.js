import Vue from 'vue'
import Vuex from 'vuex'

// 导入 为 mutation方法 起常量名的 文件
import{
    INCREMENT,
    DECREMENT
} from './mutation.types'

// 1. 安装插件
Vue.use(Vuex)

// module 模块分割
const moduleA = {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updetaName(state, payload) {
            state.name = payload
        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222'
        },
        fullname3(state, getters, rootState) {      // 拿到大的 store 里面的 state -> rootState
            return getters.fullname2 + rootState.counter
        }
    },
    actions: {
        aUpdateName(context) {
            console.log(context)
            // context.commit('updetaName', 'wangwu')    因为要异步操作,把这个注释掉    // 在模块中的 context.commit() 只找自己模块上的 mutations 中的方法
            setTimeout(() => {
                context.commit('updetaName', 'wangwu')
            }, 1000)
        }
    }
}

// 2. 创建对象
const store = new Vuex.Store({
    state: {    // 放状态的（数据）
        counter: 1000,
        students: [
            {id: 110, name: 'why', age: 18},
            {id: 111, name: 'kobe', age: 24},
            {id: 112, name: 'james', age: 30},
            {id: 113, name: 'curry', age: 10}
        ],
        info: {
            name: 'kobe',   // Dep -> [Watcher]
            age: 40,        // Dep -> [Watcher]
            height: 1.98    // Dep -> [Watcher]
        }
    },
    mutations: {    // 方法
        // 因为为 mutation 里面的方法 起了一个常量的别名,为了多次使用以防弄错, 所以 这里的方法名可以这么起  ['test'](){}    , 官方推荐 在写 mutation 方法的时候,都推荐这么写
        [INCREMENT](state) {  // 第一个参数,必须是 vuex 的state
            state.counter ++
        },
        // 所以 这个方法也要这么去写, 但是下面的我就不改了, 等以后写项目的时候,务必要改,这是一种规范
        [DECREMENT](state) {
            state.counter --
        },
        // 适配第一种 commit 提交风格的时候， count 就是那个要加多的参数
        // incrementCount(state, count) {      // 第二个参数,为自定义参数
        //     console.log(count)      // 5
        //     state.counter += count
        // },  
        // 适配第二种 commit 提交风格的时候， count 就是那个整体的对象了，包括 incrementCount 和 count等的一种载荷, 所以 这里第二个参数不如叫 payload 更好理解                          
        incrementCount(state, payload) {      // 第二个参数,为自定义参数
            console.log(payload)      // {type:'incrementCount', count: 5}
            state.counter += payload.count
        },  
        addStudents(state, stu) {        // 想传多个参数,可以做成传的值是一个对象   
            state.students.push(stu)
        },
        updateInfo(state) {
            // state.info.name = 'coderwhy'       // 修改成功
            // state.info['address'] = '洛杉矶'       // 不成功（因为不在响应式系统里面）

            // Vue.set(state.info, 'address', '洛杉矶')    // 成功， 这样在没有提前初始化的情况下，通过Vue.set 也能添加到 响应式系统中
            // delete state.info.age       // 该方式做不到响应式

            // Vue.delete(state.info, 'age')       // 成功，是响应式的


            // 讲: 异步操作 , 错误代码, 异步得用 下面的actions
            // setTimeout(() => {
            //     state.info.name = 'xiugaile'
            // },1000)
            // 这里只提供修改就行啦, 倒时候让 Actions 用 commit 来调,就哦了
            state.info.name = 'coderwhy'
        }
    },
    actions: {
        // Action 类似于 Muation , 但是是用来带代替 Mutatioon 进行

        // aUpdateInfo(context, payload) {     // 这里也可以传参数  // 这样传参和回调的方式不优雅,我们注释掉,来个优雅的
        //     setTimeout(() => {
        //         // context.state.info.name = 'xiugaile'     // 不能这么做,修改 state 只能通过 mutation
        //         context.commit('updateInfo')    // 这里的异步操作完,再调 mutation 里面的 那个要执行的方法
        //         console.log(payload.message)
        //         payload.success()
        //     },1000)
        // }

        // 优雅的 传参和回调    
        aUpdateInfo(context, payload) {         // 外面 调用了 aUpdateInfo 回返回一个 new Promise 所以外面可以直接拿到这个 又被 resolve处理好的 Promise , 所以外面调用之后,直接可以 .then() 来操作
            return new Promise((resolve, reject) => {       
                setTimeout(() => {
                    context.commit('updateInfo')    
                    console.log(payload)

                    resolve('1111')
                },1000)
            })
        }        

    },
    getters: {
        // 要拿到 counter的平方
        powerCounter(state) {
            return state.counter * state.counter
        },
        // 获取年龄大于20的学生
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        // 获取年龄大于20的学生的个数
        more20stuLength(state, getters) {     // 第二个参数,  方便我们去其他地方拿其他的 getters里面重新操作好的数据
            return getters.more20stu.length
        },
        // 获取年龄大于 age 的学生  , 这个 age 不写死,可以是别人给我传过来的 age 
        moreAgeStu(state) {     // 因为这里传参只能传两个,第二个参数,又是 geeters ,所以 age 不能往这传
            return function (age) {     // 弄一个函数, age 往这个函数传就哦了
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {      // 为解决 store 太臃肿的问题, 让 modules 分开模块化
        // a: {
        //     state: {},
        //     mutations: {},
        //     actions: {},
        //     getters: {},
        //     // modules: {}     // 一般不会定义这个,不然反而更麻烦了
        // },
        a: moduleA      // 获取的是上面 定义的 模块 一些东西在模块里面写好了
    }
})

// 3. 导出 store 对象
export default store