/*
 * @Author: mujin
 * @Date: 2021-08-08 21:39:54
 * @LastEditTime: 2021-11-17 16:56:58
 * @Description: 
 */

/**
 * 注意：菜单书写时父子菜单时，子菜单的应该带上父菜单的name
 */
import Vue from 'vue'
import Router from 'vue-router'

import Constants from '@/config/constants.js';

import Utils from "@/utils/utils.js";
import RouterUtils from '@/config/utils'
const accessList = Constants.accessList; //获取权限列表，

const originalPush = Router.prototype.push

Router.prototype.push = function push(location, onResolve, onReject) {

    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)

    return originalPush.call(this, location).catch(err => err)

}


Vue.use(Router)
const Home = resolve => require(['../views/common/index.vue'], resolve);
const Login = resolve => require(['@/views/page/login/login.vue'], resolve);

//meta 元信息中包含图标及菜单名称，以及是否是隐藏当前组件

const route = [{
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/home',
    name: 'home',
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
        path: '/component',
        name: 'component',
        component: resolve => require(['@/views/page/component/index.vue'], resolve),
        meta: {
            title: '组件',
            isHidden: false,
            icon: 'md-menu',
            access: [accessList._super, accessList._admin, accessList._ordinary]
        },
        children: [{
            path: '/component/component1',
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
            path: '/component/component2',
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
    {
        path: '/systemManager',
        name: 'systemManager',
        component: resolve => require(['@/views/page/systemManger/index.vue'], resolve),
        children: [{
            path: '/systemManager/userManager',
            name: 'userManager',
            component: resolve => require(['@/views/page/systemManger/userList.vue'], resolve),
        },
        {
            path: '/systemManager/roleManager',
            name: 'roleManager',
            component: resolve => require(['@/views/page/systemManger/roleList.vue'], resolve),
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
_router.beforeEach((to, from, next) => {
    const menuList = Utils.getSessionItem('menus') || [], token = Utils.getSessionItem('token') || '';
    if (to.path == '/') {
        next({ name: LOGINPATH });
    } else {
        if (to.name === LOGINPATH) {
            next();
        } else if (!token) {
            next({ name: LOGINPATH });
        }
        else if (Utils.isAccessTo(menuList, to.name)) {
            next();
        }
        else {
            next({ name: LOGINPATH });
        }
    }

});

export default _router;