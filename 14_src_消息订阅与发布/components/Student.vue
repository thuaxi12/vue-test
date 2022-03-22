<template>
  <div class="student">
      <h2>学生名称:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
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
            sendStudentName(){
                // this.$bus.$emit('hello',this.name)
                pubsub.publish("hello",666)
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