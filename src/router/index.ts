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
            component: () => import(/* webpackChunkName: "about" */ '../views/SelectColor.vue')
        },
    ]
})

export default router
