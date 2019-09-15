// 因为 store 里面的 mutation 方法太多,容易写错出错,所以我们用常量来代替一下,  因为这里到处的常量是 export 不是 export default ,所以 接收的时候, 不能直接 import 起名就导入, 而是需要 import{}来导入的

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
