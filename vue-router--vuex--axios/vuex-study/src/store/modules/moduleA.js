export default {
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