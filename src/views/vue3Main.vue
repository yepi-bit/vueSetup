<template>
    <div>
        <vue3-value :msg="msg" @getMsg="getmsg"/>
    </div>
</template>

<script setup>
    import vue3Value from '../components/vue3Value.vue'
    import {ref, provide } from 'vue'

    const msg = ref('父传给子组件的信息');
    const getmsg = (msg) => {
      alert(msg)
        console.log(msg)
    };

    provide("msg2", "父组件信息")
</script>

<style scoped>

</style>
