<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="hello" appear>
          <h1 v-show="isShow" class="come">你好啊</h1>
      </transition>
  </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: skyblue;
    }

    .hello-enter-active{
        animation: thuaxi 1s;
    }

    .hello-leave-active{
        animation: thuaxi 1s reverse;
    }

    @keyframes thuaxi {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>