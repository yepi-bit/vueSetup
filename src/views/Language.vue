<template>
    <div class="change-locale">
        <a-radio-group v-model:value="locale">
            <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
            <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
        </a-radio-group>
    </div>
    <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
        <div class="locale-components">
            <div class="example">
                <a-date-picker/>
                <a-time-picker/>
                <a-range-picker style="width: 200px"/>
            </div>
            <div class="site-config-provider-calendar-wrapper">
                <a-calendar :fullscreen="false"/>
            </div>
        </div>
    </a-config-provider>
</template>
<script>
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import dayjs from 'dayjs';
    import 'dayjs/locale/zh-cn';
    import {defineComponent, ref, watch} from 'vue';

    dayjs.locale('en');

    export default defineComponent({
        setup() {
            const locale = ref(enUS.locale);
            watch(locale, val => {
                dayjs.locale(val);
            });
            return {
                locale,
                dayjs,
                enUS,
                zhCN
            };
        },
    });
</script>
<style scoped>
    .site-config-provider-calendar-wrapper {
        width: 319px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
    }

    .locale-components {
        border-top: 1px solid #d9d9d9;
        padding-top: 16px;
    }

    .example {
        margin: 16px 0;
    }

    .example > * {
        margin-right: 8px;
    }

    .change-locale {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    [data-theme='dark'] .locale-components {
        border-top: 1px solid #303030;
    }

    [data-theme='dark'] .site-config-provider-calendar-wrapper {
        border: 1px solid #303030;
    }
</style>
