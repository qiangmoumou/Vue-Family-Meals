<template>
	<div>
		<h2>我是Profile组件</h2>
		<h2>{{ $route.query.name }}</h2>
		<h2>{{ $route.query.age }}</h2>
		<h2>{{ $route.query.height }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Profile',
		created() {       // data 和 mounted 已经初始化完成
		  console.log('Profile created')
		},
		destroyed() {     // 销毁的生命周期函数   
		  console.log('Profile destroyed')
		}
	}
</script>

<style scoped>
	
</style>