<template>
    <div class="box">
        <div>{{header}}</div>
        <div>{{text}}</div>
        <div style="bottom:0;position: absolute;margin: 20px; right: 0">
            <a-button v-on:click="onConfirm" style="margin-right: 12px" :loading="loading">确定</a-button>
            <a-button v-on:click="onCancel">取消</a-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vDialog",
        props: {
            header: {
                type: String
            },
            text: String,
            confirm: {
                type: Function
            }
        },
        data() {
            return {
                loading: false
            }
        },
        methods:{
            //  点击确定
            onConfirm () {
                this.$emit('confirm',"loading")
                this.loading = true
            },
            // 点击取消
            onCancel () {
                this.$emit('cancel',"取消拉")
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    .box {
        position: relative;
        width: 400px;
        height: 400px;
        background: #e9e9e9;
        margin: 36px auto;
    }
</style>
