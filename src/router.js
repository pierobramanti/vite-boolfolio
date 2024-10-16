import { createRouter, createWebHistory } from 'vue-router';

import PageHome from './pages/PageHome.vue';
import PagePortfolio from './pages/PagePortfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PagePortfolio
        }
    ]
});

export { router };
