import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import ConfigProvider from 'ant-design-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCalendarHeatmap from 'vue3-calendar-heatmap'



createApp(App).use(router).use(ElementPlus).use(VueCalendarHeatmap).use(Antd).use(ConfigProvider).mount('#app')
