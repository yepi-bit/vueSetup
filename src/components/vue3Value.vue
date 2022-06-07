<template>
    <div>
        <div>{{msg}}</div>
        <el-button @click="postMsg">向父组件传值</el-button>
    </div>
</template>

<script setup>
    import {inject} from 'vue'
    //获取值  需要通过defineProps暴露出来
    const props = defineProps({
        msg: String,
    });
    const emit = defineEmits(["getMsg"]);
    const postMsg = () => {
        emit('getMsg', '向父组件传值')
    };
    const msg2 = inject('msg2'); //接收参数
    console.log(msg2)

</script>

<style scoped>

</style>
