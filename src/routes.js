import { createWebHistory,createRouter } from "vue-router";

import Home from './components/HomePage.vue'
import Profile from './components/ProfilePage.vue'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: Home
    },
    {
        name: 'ProfilePage',
        path: '/profile/:id',
        component: Profile
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;