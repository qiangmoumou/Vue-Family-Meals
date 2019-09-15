import{
  INCREMENT,
  DECREMENT
} from './mutation.types'

export default {      // mutation 方法  

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

}