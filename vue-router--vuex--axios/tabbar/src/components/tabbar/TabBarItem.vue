<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- 因为写在外面的插槽内容会直接替换掉这个插槽，所以为了实现class，就是能给这个插槽包裹一个 div -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        
        <!-- 不想写死，所以要搞两个插槽 -->
        <!-- <img src="../../assets/img/tabbar/home.png" alt="">
        <div>首页</div> -->
    </div>
</template>

<script>
    export default {
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                // isActive: true
            }
        },
        computed: {
            isActive() {
                // /home -> item1(/home) = true
                // /home -> item2(/category) = false
                // /home -> item3(/cart) = false
                // /home -> item4(/profile) = false
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height:46px;
        font-size:14px;
    }
</style>