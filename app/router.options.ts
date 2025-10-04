export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('~/pages/Home.vue'),
        sitemap: true
    },
    {
        name: 'tilmeld',
        path: '/tilmeld',
        component: () => import('~/pages/Register.vue'),
        sitemap: true
    },
    {
        path: '/fortnite',
        name: 'fortnite',
        component: () => import('~/pages/Fortnite.vue'),
        sitemap: true
    },
    {
        path: '/counterstrike',
        name: 'counterstrike',
        component: () => import('~/pages/CounterStrike.vue'),
        sitemap: true
    },
    {
        path: '/minecraft',
        name: 'minecraft',
        component: () => import('~/pages/Minecraft.vue'),
        sitemap: true
    },
    {
        path: '/bestyrelsen',
        name: 'bestyrelsen',
        component: () => import('~/pages/Board.vue'),
        sitemap: false
    },
    {
        path: '/vedtaegter',
        name: 'vedtaegter',
        component: () => import('~/pages/Statutes.vue'),
        sitemap: false
    },
    {
        path: '/ordensregler',
        name: 'ordensregler',
        component: () => import('~/pages/RulesOfOrder.vue'),
        sitemap: false
    },
]

export default { routes: () => routes }
