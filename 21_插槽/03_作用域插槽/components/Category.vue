<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games">默认</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData','title'],
        data() {
		return {
			games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
		}
		},	
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>