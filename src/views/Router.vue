<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <a-button @click="routerTo">click here to Step page</a-button>
        <h1>{{ msg2 }}</h1>
        <a-button @click="routerTo2">click here to Step page</a-button>
    </div>
</template>

<script>
    export default {
        name: 'Router',
        data () {
            return {
                msg: 'Welcome to Your Router Methods',
                msg2: 'Welcome to Your Router Methods2'
            }
        },
        methods:{
            routerTo(){
                this.$router.push({ name: 'Step', params: { userId: 123 }});
            },
            routerTo2(){
                this.$router.push({ path: '/step', query: { userId: 666, userName: '哈哈'}});
            }
        }
    }
</script>

<style>
</style>
