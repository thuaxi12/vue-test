//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue'
//全局引入混合
import {mixin,mixin2} from './mixin'

//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.mixin(mixin);
Vue.mixin(mixin2);

//创建vm
new Vue({
    el:'#app',
    render : h => h(App)
})