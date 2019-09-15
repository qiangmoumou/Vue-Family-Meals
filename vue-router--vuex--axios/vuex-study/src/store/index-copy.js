import Vue from 'vue'
import Vuex from 'vuex'

// 导入 mutation
import mutations from './mutations'
// 导入 actions
import actions from './actions'
// 导入 getters
import getters from './getters'
// 导入 modules 模块
import moduleA from './modules/moduleA'


// 1. 安装插件
Vue.use(Vuex)



const state = { // 放状态的（数据）
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
}


// 2. 创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters, 
    modules: {
        a: moduleA
    }
})

// 3. 导出 store 对象
export default store