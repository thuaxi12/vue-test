//该文件用于创建Vuex中最核心的store
//引入Vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)

//求和相关配置
const countOptions = {
    namespaced:true,
    actions:{
        jiaOdd(context,value){
            console.log('actions中的jiaOdd被调用了');
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value){
            console.log('actions中的jiaWait被调用了');
            setTimeout(() => {
                context.commit('JIA',value)
            }, 500);
        },
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的jia被调用了');
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的jia被调用了');
            state.sum -= value
        },
    },
    state:{
        sum:0,//当前的和
        school:'thuaxi',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}
//人员相关配置
const personOptions = {
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了');
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'thuaxi'}
        ]
    },
    getters:{},
}




//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})