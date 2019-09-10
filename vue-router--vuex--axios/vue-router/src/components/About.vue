<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容,呵呵呵</p>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
        
      }
    },
    // created() {
    //   document.title = '关于'
    // }
    created() {       // data 和 mounted 已经初始化完成
		  console.log('About created')
		},
		destroyed() {     // 销毁的生命周期函数   
		  console.log('About destroyed')
		}
  }
</script>
 
<style scoped>
  
</style>