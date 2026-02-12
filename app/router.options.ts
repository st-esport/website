import type { RouterConfig } from '@nuxt/schema'
import RulesOfOrder from "~/pages/RulesOfOrder.vue";
import Statutes from "~/pages/Statutes.vue";
import Board from "~/pages/Board.vue";
import Minecraft from "~/pages/Minecraft.vue";
import CounterStrike from "~/pages/CounterStrike.vue";
import Fortnite from "~/pages/Fortnite.vue";
import Register from "~/pages/Register.vue";
import Home from "~/pages/Home.vue";
import Calendar from "~/pages/Calendar.vue";

export default {
    routes: _routes => {
        return [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                component: Register,
                name: 'tilmeld',
                path: '/tilmeld',
            },
            {
                path: '/fortnite',
                name: 'fortnite',
                component: Fortnite,
            },
            {
                path: '/counterstrike',
                name: 'counterstrike',
                component: CounterStrike,
            },
            {
                path: '/minecraft',
                name: 'minecraft',
                component: Minecraft,
            },
            {
                path: '/kalender',
                name: 'kalender',
                component: Calendar,
            },
            {
                path: '/bestyrelsen',
                name: 'bestyrelsen',
                component: Board,
            },
            {
                path: '/vedtaegter',
                name: 'vedtaegter',
                component: Statutes,
            },
            {
                path: '/ordensregler',
                name: 'ordensregler',
                component: RulesOfOrder,
            },
        ];
    },
} satisfies RouterConfig
