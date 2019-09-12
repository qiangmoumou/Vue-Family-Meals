import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
    state: {    // 放状态的（数据）
        counter: 1000,
        students: [
            {id: 110, name: 'why', age: 18},
            {id: 111, name: 'kobe', age: 24},
            {id: 112, name: 'james', age: 30},
            {id: 113, name: 'curry', age: 10}
        ]
    },
    mutations: {    // 方法
        increment(state) {  // 第一个参数,必须是 vuex 的state
            state.counter ++
        },
        decrement(state) {
            state.counter --
        },
        incrementCount(state, count) {      // 第二个参数,为自定义参数
            state.counter += count
        },                              
        addStudents(state, stu) {        // 想传多个参数,可以做成传的值是一个对象   
            state.students.push(stu)
        }
    },
    actions: {

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
    modules: {

    }
})

// 3. 导出 store 对象
export default store