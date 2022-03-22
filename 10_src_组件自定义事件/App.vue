<template>
  <div class="app">
    <h1>{{ msg }} 学生姓名是:{{studentName}}</h1>
    <!-- 通过父组件子组件传递函数类型的props实现 父=>子传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @thuaxi="getStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		<Student ref="student" @click.native="show"/>
    
  </div>
</template>

<script>
  //引入School组件
  import Student from "./components/Student.vue";
  import School from "./components/School.vue";
  export default {
    name: "App",
    components: { Student, School },
    data() {
      return {
        msg: "hello!!!!",
        studentName:''
      };
    },
    methods: {
      getSchoolName(name) {
        console.log("app收到了学习名：", name);
      },
      getStudentName(name,...parms){
        console.log('demo被调用了',name,parms);
        this,this.studentName = name;
      },
      m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
    },
    mounted() {
			this.$refs.student.$on('thuaxi',this.getStudentName) //绑定自定义事件
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
  };
</script>

<style scoped>
  .app {
    background-color: pink;
    padding: 5px;
  }
</style>