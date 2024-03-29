//求和相关配置
export default {
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