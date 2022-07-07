
import { createRouter, createWebHistory } from "vue-router"
import useStore from "../store/store"
import DefaultLayout from '../components/DefaultLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Surveys from '../views/Surveys.vue'

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'DefaultLayout',
        component: DefaultLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/surveys',
                name: 'Surveys',
                component: Surveys
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const store = useStore()

    if (to.meta.requiresAuth && !store.user.token) {
        next({ name: 'Login' })
    } else if (store.user.token && (to.name === 'Login' || to.name === 'Register')) {
        next({name: from.name})
    } else {
        next()
    }
})

export default router;