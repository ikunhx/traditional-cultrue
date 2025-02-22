import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import SignUp from '@/pages/SignUp.vue';
import Cixiu from '@/pages/introduction/Cixiu.vue';
import Hanfu from '@/pages/introduction/Hanfu.vue';
import Jingjv from '@/pages/introduction/Jingjv.vue';
import Rujia from '@/pages/introduction/Rujia.vue';
import Zhongyi from '@/pages/introduction/Zhongyi.vue';


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
        {
            path: '/Cixiu',
            component: Cixiu,
            name: 'Cixiu'
        },
        {
            path: '/Hanfu',
            component: Hanfu,
            name: 'Hanfu'
        },
        {
            path: '/Jingjv',
            component: Jingjv,
            name: 'Jingjv'
        },
        {
            path: '/Rujia',
            component: Rujia,
            name: 'Rujia'
        },
        {
            path: '/Zhongyi',
            component: Zhongyi,
            name: 'Zhongyi'
        },

    ]
})




export default router;