<template>
    <ul>
        <li>消息编号是：{{$route.query.id}}</li>
        <li>消息标题是：{{$route.query.title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
    }
</script>

<style>

</style>