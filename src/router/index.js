import Vue from 'vue';
import VueRouter from "vue-router";
import store from '@/store'; 
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import SignUp from '@/pages/SignUp.vue';
import Cixiu from '@/pages/introduction/Cixiu.vue';
import Hanfu from '@/pages/introduction/Hanfu.vue';
import Jingjv from '@/pages/introduction/Jingjv.vue';
import Rujia from '@/pages/introduction/Rujia.vue';
import Zhongyi from '@/pages/introduction/Zhongyi.vue';
import CandyMan from '@/components/CandyMan.vue';
import Center from '@/pages/Center.vue';
import City from '@/pages/City.vue';
import Boss from '@/pages/Boss.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/home',
            component: Home,
            name: 'home'
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
        {
            path: '/CandyMan',
            component: CandyMan,
            name: 'CandyMan'
        },
        {
            path:'/Center',
            component:Center,
            name:'Center'
        },
        {
            path:'/City',
            component:City,
            name:'City'
        },
        {
            path:'/Boss',
            component:Boss,
            name:'Boss'
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    const token = store.state.token;
    const allowedRoutes = ['Login', 'SignUp'];

    if (!token &&!allowedRoutes.includes(to.name)) {
        // 如果 token 为空且目标路由不在允许列表中，则跳转到登录页
        next({ name: 'Login' });
    }  else {
        next();
      }
});  


export default router;