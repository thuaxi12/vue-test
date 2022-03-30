<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">上Count组件的求和为{{sum}}</h3>
        <h3>列表中第一个人的名字是:{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPerson">添加一个人名字随机</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                name:''
            }
        },
        name:"Person",
        computed:{
            ...mapState('personAbout',['personList']),
            ...mapState('countAbout',['sum']),
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                console.log(personObj);
                this.$store.commit('personAbout/ADD_PERSON',personObj)
                this.name = ''
            },
            addWang(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addPersonWang',personObj)
                this.name = ''
            },
            addPerson(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        }
    }
</script>

<style>

</style>