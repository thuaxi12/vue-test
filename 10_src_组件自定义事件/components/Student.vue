<template>
  <div class="student">
      <h2>学生名称:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <h2>当前求和为：{{number}}</h2>
      <button  @click="add">点我number++</button>
      <button @click="sendStudentName">把学生名传给app</button>
      <button @click="unbind">解绑thuaxi事件</button>
      <button @click="death">销毁当前Student组件的实例对象(vc)</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                name:"thuaxi",
                sex:'男',
                number:0
            }
        },
        methods:{
            add(){
                console.log('add回调被调用了');
                this.number++
            },
            //触发student组件实例的thhuaxi事件
            sendStudentName(){
                this.$emit('thuaxi',this.name,666,888,999)
                this.$emit('demo')
            },
            unbind(){
                this.$off('thuaxi')//解绑一个自定义事件
                // this.$off(['thuaxi','demo'])//解绑多个自定义事件
                // this.$off()//解绑多所有自定义事件
            },
            death(){
                this.$destroy()//销毁了当前Student组件的实例,  销毁后所有Student实例的自定义事件全都不奏效
            }
        }
    }
</script>

<style lang="css">
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>