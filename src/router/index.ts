import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import progressDisplayVue from '../views/progressDisplay.vue';
import taskAddVue from '../views/taskAdd.vue';
import updateProgressVue from '../views/updateProgress.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/progressDisplay',
    },
    {
        path: '/progressDisplay',
        name: 'progressDisplay',
        component: progressDisplayVue
    },
    {
        path: '/taskAdd',
        name: 'taskAdd',
        component: taskAddVue
    },
    {
        path: '/updateProgress',
        name: 'updateProgress',
        component: updateProgressVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;