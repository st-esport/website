import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsView from "@/views/TeamsView.vue";
import BoardView from "@/views/BoardView.vue";
import StatutesView from "@/views/StatutesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/hold',
            name: 'hold',
            component: TeamsView
        },
        {
            path: '/bestyrelsen',
            name: 'bestyrelsen',
            component: BoardView,
        },
        {
            path: '/vedtaegter',
            name: 'vedtaegter',
            component: StatutesView,
        },
    ],
})

export default router
