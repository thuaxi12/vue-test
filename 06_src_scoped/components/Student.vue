<template>
  <div class="demo">
      <h2>学生名称:{{name}}</h2>
      <h2 class="title">学生性别:{{sex}}</h2>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                name:"thuaxi",
                sex:'男'
            }
        }
    }
</script>

<style lang="css">
    .demo{
        background-color: rgb(250, 197, 206);
    }
</style>