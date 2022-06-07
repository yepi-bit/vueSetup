<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
  <div class="change-locale" style="float: right;padding: 20px 40px 0 0">
    <a-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="pressData" />
    <a-radio-group v-model:value="locale" size="small">
      <a-radio-button key="en" :value="enUS.locale">En</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">Zh</a-radio-button>
    </a-radio-group>
  </div>
  <div>
    <router-link to="/"><a-button type="danger" ghost>Echarts</a-button></router-link> |
    <router-link to="showText"><a-button type="danger" ghost>ShowText</a-button></router-link> |
    <router-link to="language"><a-button type="danger" ghost>Language</a-button></router-link> |
    <router-link to="selectColor"><a-button type="danger" ghost>SelectColor</a-button></router-link> |
    <router-link to="calendarMap"><a-button type="danger" ghost>CalendarMap</a-button></router-link> |
    <router-link to="mouseChange"><a-button type="danger" ghost>MouseChange</a-button></router-link> |
    <router-link to="step"><a-button type="danger" ghost>Step</a-button></router-link> |
    <router-link to="router"><a-button type="danger" ghost>Router</a-button></router-link> |
    <router-link to="spriteFigure"><a-button type="danger" ghost>SpriteFigure</a-button></router-link> |
    <router-link to="vue3Main"><a-button type="danger" ghost>vue3Main</a-button></router-link>
  </div>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div>
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
  import enUS from 'ant-design-vue/es/locale/en_US';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  import { message } from 'ant-design-vue';
  import {defineComponent, ref, watch} from 'vue';

  dayjs.locale('en');

  export default defineComponent({
    setup() {
      const timer = ref(null);
      const locale = ref(enUS.locale);
      const pressData = ref(0);
      timer.value = setInterval(()=>{
        pressData.value++;
        if(pressData.value === 100) message.success('进度 100% ');
      },10);

      const beforeUnmount = () => {
        clearInterval(timer.value);
      };
      watch(locale, val => {
        dayjs.locale(val);
      });
      return {
        locale,
        dayjs,
        enUS,
        zhCN,
        pressData,
        timer,
        beforeUnmount
      };
    },
  });
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
