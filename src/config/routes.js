import { createRouter, createWebHistory } from 'vue-router';
import frontPage from '../pages/frontpage.vue';
import login from '../pages/login.vue';
import portafolio from '../pages/portafolio.vue';
import teto from '../pages/teto.vue';

const routes = [
{
    path:'/',
    name:'frontPage',
    component: frontPage,
},
{
    path:'/login',
    name:'login',
    component: login,
},
{
    path:'/portafolio',
    name:'portafolio',
    component: portafolio,
},
{
    path:'/teto',
    name:'teto',
    component: teto,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;