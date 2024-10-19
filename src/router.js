import { createRouter, createWebHistory } from 'vue-router';

import PageHome from './pages/PageHome.vue';
import PagePortfolio from './pages/PagePortfolio.vue';
import PageAbout from './pages/PageAbout.vue';
import PageSingleProject from './pages/PageSingleProject.vue';
import PageNotFound from './pages/PageNotFound.vue';

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
        },
        {
            path: '/portfolio/:slug',
            name: 'single-project',
            component: PageSingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFound
        }
    ]
});

export default router;
