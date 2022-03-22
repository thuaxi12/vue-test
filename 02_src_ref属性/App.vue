<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
      <School ref="sch"/>
  </div>
</template>

<script>
//引入School组件
    import School from './components/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'hello world'
            }
        },
        components:{School},
        methods:{
            showDom(){
                // console.log(document.getElementById('title'));
                console.log(this.$refs.title);//真实dom元素
                console.log(this.$refs.btn);//真实dom元素
                console.log(this.$refs.sch);//School组件的实力对象 vc

            }
        }
    }
</script>

<style>

</style>