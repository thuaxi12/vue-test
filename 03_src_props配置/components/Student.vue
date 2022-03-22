<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生名称:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <h2>学生年龄:{{age + 1}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我是好人',
            
        }
    },
    //简单声明接收
    props:['name','age','sex',]
    //接受的同时对数据进行类型限制
    /* props:{
        name:String,
        age:Number,
        sex:String
    } */
    //接受的同时对数据进行：类型限制+默认值的指定
    /* props:{
        name:{
            type:String,//类型必须为字符串
            require:true//必填
        },
        age:{
            type:Number,
            default:99//默认值
        },
        sex:{
            type:String,
            require:true
        }
    } */
}
</script>