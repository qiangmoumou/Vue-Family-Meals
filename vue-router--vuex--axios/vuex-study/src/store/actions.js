export default {

  // Action 类似于 Mutation , 但是是用来带代替 Mutatioon 进行

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

}