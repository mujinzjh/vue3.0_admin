import Vue from 'vue'
import Router from 'vue-router'

import Constans from '@/config/constans.js';

import Utils from "@/config/utils.js";

const accessList = Constans.accessList; //获取权限列表，



Vue.use(Router)
const Home = resolve => require(['../views/common/index.vue'], resolve);
const Login = resolve => require(['@/views/page/login/login.vue'], resolve);

//meta 元信息中包含图标及菜单名称，以及是否是隐藏当前组件

const route = [{
    path: '/',
    name: 'Login',
    component: Login
},
{
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
        path: '/index',
        name: 'index',
        component: resolve => require(['@/views/page/home/index.vue'], resolve),
        meta: {
            title: '首页',
            isHidden: false,
            icon: 'md-home',
            access: [accessList._super, accessList._admin, accessList._ordinary]
        }
    },
    {
        path: '/index/component',
        name: 'component',
        component: resolve => require(['@/views/page/component/index.vue'], resolve),
        meta: {
            title: '组件',
            isHidden: false,
            icon: 'md-menu',
            access: [accessList._super, accessList._admin, accessList._ordinary]
        },
        children: [{
            path: '/index/component/component1',
            name: 'component1',
            component: resolve => require(['@/views/page/component/component1/index.vue'], resolve),
            meta: {
                title: '组件1',
                isHidden: false,
                icon: 'md-home',
                access: [accessList._super, accessList._admin, accessList._ordinary]
            },
        },
        {
            path: '/index/component/component2',
            name: 'component2',
            component: resolve => require(['@/views/page/component/component2/index.vue'], resolve),
            meta: {
                title: '组件2',
                isHidden: false,
                icon: 'md-home',
                access: [accessList._super, accessList._admin, accessList._ordinary]
            },
        }
        ]
    },
    ]
}
]


const _router = new Router({
    routes: route
});

// 进行路由防守

const LOGINPATH = 'Login';

// _router.beforeEach((to, from, next) => {
//     const token = sessionStorage.getItem('token');
//     const access = sessionStorage.getItem('access');
//     if (to.name === LOGINPATH) {
//         next();
//     } else if (!token) {
//         next({ name: LOGINPATH });
//     } else if (Utils.isAccess(to.name, access, route)) {
//         next()
//     } else {
//         next({ name: LOGINPATH });
//     }
// });

export default _router;