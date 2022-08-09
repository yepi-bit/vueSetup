import {createRouter, createWebHashHistory} from "vue-router";
import Echarts from '../views/Echarts.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Echarts',
            component: Echarts
        },
        {
            path: '/pieChart',
            name: 'PieChart',
            component: () => import(/* webpackChunkName: "about" */ '../views/PieChart.vue')
        },
        {
            path: '/showText',
            name: 'ShowText',
            component: () => import(/* webpackChunkName: "about" */ '../views/ShowText.vue')
        },
        {
            path: '/language',
            name: 'Language',
            component: () => import(/* webpackChunkName: "about" */ '../views/Language.vue')
        },
        {
            path: '/selectColor',
            name: 'SelectColor',
            component: () => import(/* webpackChunkName: "SelectColor" */ '../views/SelectColor.vue')
        },
        {
            path: '/calendarMap',
            name: 'CalendarMap',
            component: () => import(/* webpackChunkName: "CalendarMap" */ '../views/CalendarMap.vue')
        },
        {
            path: '/mouseChange',
            name: 'MouseChange',
            component: () => import(/* webpackChunkName: "MouseChange" */ '../views/MouseChange.vue')
        },
        {
            path: '/step',
            name: 'Step',
            component: () => import(/* webpackChunkName: "Step" */ '../views/Step.vue')
        },
        {
            path: '/router',
            name: 'Router',
            component: () => import(/* webpackChunkName: "Router" */ '../views/Router.vue')
        },
        {
            path: '/spriteFigure',
            name: 'SpriteFigure',
            component: () => import(  '../views/SpriteFigure.vue')
        },
        {
            path: '/vue3Main',
            name: 'vue3Main',
            component: () => import(  '../views/vue3Main.vue')
        },
        {
            path: '/scroll',
            name: 'Scroll',
            component: () => import(  '../views/Scroll.vue')
        },
        {
            path: '/timer',
            name: 'Timer',
            component: () => import(  '../views/Timer.vue')
        },
        {
            path: '/codeMirror',
            name: 'CodeMirror',
            component: () => import(  '../views/CodeMirror.vue')
        },
        {
            path: '/navScreen',
            name: 'NavScreen',
            component: () => import(  '../views/NavScreen.vue')
        },
        {
            path: '/canvasPen',
            name: 'canvasPen',
            component: () => import(  '../views/CanvasPen.vue')
        },
        {
            path: '/qs',
            name: 'qs',
            component: () => import(  '../views/Qs.vue')
        }
    ]
})

export default router
