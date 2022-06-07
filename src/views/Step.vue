<template>
    <div style="margin: 60px auto">
        <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
<!--            {{ steps[current].content }}-->

    <!-- window浏览器语音-->
            <div v-show="steps[current].title === '文本读取'">
                <Read />
            </div>

        <!--自定义组件-->
            <div v-show="steps[current].title === '自定义弹窗'">
                <v-dialog header="自定义弹窗" text="内容..." v-show="dialogShow" v-on:confirm="onConfirm" v-on:cancel="onCancel" />
                <a-button @click="dialogShow = true">弹窗</a-button>
            </div>

            <div v-show="steps[current].title === '路由传值'">
                <div>
                    this is the Step page.the transform param is <span style="color: rgba(89, 124, 230, 0.8);font-weight: bold">{{this.$route.params.userId}}</span>
                </div>
                <div>
                    this is the Step page.the transform param is <span style="color: rgba(137, 38, 157, 0.8);font-weight: bold">{{this.$route.query.userId}}</span>
                </div>
            </div>
        </div>
        <div class="steps-action">
            <a-button v-if="current > 0" style="margin-right: 8px" @click="prev">上一步</a-button>
            <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
            <a-button
                    v-if="current == steps.length - 1"
                    type="primary"
                    @click="message.success('Processing complete!')"
            >
                下一步
            </a-button>

        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { message } from 'ant-design-vue';
    import Read from "../components/Read.vue";
    import vDialog from "../components/vDialog.vue";

    export default defineComponent({
        components: {
            Read,
            vDialog
        },
        setup() {
            const dialogShow = ref<boolean>(false);
            const loading = ref(false);
            const current = ref<number>(0);
            const next = () => {
                current.value++;
            };
            const prev = () => {
                current.value--;
            };
            // 点击确定隐藏
            const onConfirm = (val: string) => {
                setTimeout(()=> {
                    dialogShow.value = false;
                },2000);
                message.success('提交成功');
            };
            // 点击取消隐藏
            const onCancel = (cal: string) => {
                dialogShow.value = false;
                console.log(cal)
            };
            return {
                message,
                current,
                steps: [
                    {
                        title: '文本读取',
                        content: 'First-content',
                    },
                    {
                        title: '自定义弹窗',
                        content: 'Second-content',
                    },
                    {
                        title: '路由传值',
                        content: 'Last-content',
                    },
                ],
                next,
                prev,
                dialogShow,
                onConfirm,
                onCancel,
                loading
            };
        },
    });
</script>
<style scoped>
    .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        background-color: #fafafa;
        height: 60vh;
        text-align: center;
    }

    .steps-action {
        margin-top: 24px;
    }

    [data-theme='dark'] .steps-content {
        background-color: #2f2f2f;
        border: 1px dashed #404040;
    }
</style>
