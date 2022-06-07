<template>
    <div style="padding: 36px">
        <a-button type="primary" @click="showDrawer">Open SelectColor</a-button>
        <a-drawer
                v-model:visible="visible"
                class="custom-class"
                style="color: red"
                title="取颜色器"
                width="600"
                placement="right"
                @after-visible-change="afterVisibleChange"
        >
            <h4>在线取色:</h4>
            <a-space>
                <a-select
                        v-model:value="selectColor"
                        show-search
                        placeholder="Select a person"
                        style="width: 200px"
                        :options="options"
                        :filter-option="filterOption"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        @change="handleChange"
                ></a-select>
                <div v-show="selectColor.value !== '选择类型'">
                    <el-color-picker size="large" v-if="selectColor === 'system'" v-model="color2" @change="RgbColor" />
                    <el-color-picker size="large" v-if="selectColor === 'rgb'" v-model="color" show-alpha @change="RgbColor" />
                </div>
<!--                <a-input style="width: 230px" v-model:value="valueCode" :placeholder="placeholder" />-->
                <a-input-group compact>
                    <a-input id="input" style="width: 230px" v-model:value="valueCode" @change="change" :placeholder="placeholder" />
                    <a-tooltip title="copy git code">
                        <a-button @click="copy" :disabled="disabled">
                            <template #icon><CopyOutlined /></template>
                        </a-button>
                    </a-tooltip>
                </a-input-group>
            </a-space>
            <a-skeleton avatar active :loading="loading" :paragraph="{ rows: 6 }">
                <water-fall :GetColor="valueCode" :GetSelect="selectColor" :GetVisible="visible" />
            </a-skeleton>
        </a-drawer>
    </div>
</template>
<script>
    import {defineComponent, ref} from 'vue';
    import { CopyOutlined } from '@ant-design/icons-vue';
    import {message} from "ant-design-vue";
    import WaterFall from "../components/waterFall.vue";
    export default defineComponent({
        components: {
            WaterFall,
            CopyOutlined,
        },

        setup() {
            const color = ref('rgba(19, 206, 102, 0.8)');
            const color2 = ref('rgba(177, 15, 164, 0.8)');
            const disabled = ref(true);
            const loading = ref(false);
            const valueCode = ref('');
            const RgbColor = () => {
                // selectColor.value ==='rgb' ? valueCode.value = color.value : valueCode.value = color2.value;
                if(selectColor.value ==='rgb'){
                    valueCode.value = color.value;
                    disabled.value = false;
                }
                if(selectColor.value ==='system'){
                    valueCode.value = color2.value;
                    disabled.value = false;
                }
                if(valueCode.value === null) {
                    disabled.value = true;
                    return
                }

            };
          function change() {
            if(valueCode.value.length === 0){
              disabled.value = true;
            }else {
              disabled.value = false;
            }
          }
            const copy = () => {
                const copy = document.getElementById('input').select();
                document.execCommand("Copy");
                message.success(`已经成功复制~ ${valueCode.value} `)
            }
            const placeholder = ref('请选择类型颜色码');

            const visible = ref(false);

            const afterVisibleChange = bool => {
                console.log('visible', bool);
            };
            const selectColor = ref('选择类型');

            const showDrawer = () => {
                visible.value = true;
                selectColor.value = '选择类型';
                valueCode.value = '';
                disabled.value = true;
                color.value = 'rgba(19, 206, 102, 0.8)';
                color2.value = 'rgba(177, 15, 164, 0.8)';
                placeholder.value = '请选择类型颜色码';
                loading.value = true;
                setTimeout(() => {
                    loading.value = false;
                }, 1000);

            };
            const options = ref([{
                value: 'system',
                label: '十六进制颜色码',
            }, {
                value: 'rgb',
                label: 'RGB颜色值',
            }
            ]);

            const focus = () => {
                console.log('focus');
            };

            const handleChange = value => {
                valueCode.value = '';
                disabled.value = true;
                selectColor.value === 'rgb' ? placeholder.value = '请选择RGB颜色值' : placeholder.value = '请选择十六进制颜色码';
                console.log(`selected ${value}`,'哈哈哈哈');
            };

            return {
                color,
                color2,
                visible,
                afterVisibleChange,
                showDrawer,
                focus,
                handleChange,
                selectColor,
                valueCode,
                options,
                RgbColor,
                placeholder,
                copy,
                disabled,
                change,
                loading
            };
        },

    });
</script>
