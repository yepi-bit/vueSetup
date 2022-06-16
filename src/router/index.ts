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
            component: () => import(/* webpackChunkName: "SpriteFigure" */ '../views/SpriteFigure.vue')
        },
        {
            path: '/vue3Main',
            name: 'vue3Main',
            component: () => import(/* webpackChunkName: "SpriteFigure" */ '../views/vue3Main.vue')
        },
        {
            path: '/scroll',
            name: 'Scroll',
            component: () => import(/* webpackChunkName: "SpriteFigure" */ '../views/Scroll.vue')
        },
    ]
})

export default router
