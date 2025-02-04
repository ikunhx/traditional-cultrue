import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import SignUp from '@/pages/SignUp.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/Home',
            component: Home,
            name: 'Home'
        },
        {
            path: '/SignUp',
            component: SignUp,
            name: 'SignUp'
        },
        {
            path: '/Login',
            component: Login,
            name: 'Login'
        },

    ]
})




export default router;