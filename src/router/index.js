import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = resolve => require(['../views/common/index.vue'], resolve);
const Login = resolve => require(['@/views/page/login/login.vue'], resolve);

export default new Router({
    routes: [{
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
                        icon: 'md-home'
                    }
                },
                {
                    path: '/index/component',
                    name: 'component',
                    component: resolve => require(['@/views/page/component/index.vue'], resolve),
                    meta: {
                        title: '组件',
                        isHidden: false,
                        icon: 'md-menu'
                    },
                    children: [{
                            path: '/index/component/component1',
                            name: 'component1',
                            component: resolve => require(['@/views/page/component/component1/index.vue'], resolve),
                            meta: {
                                title: '组件1',
                                isHidden: false,
                                icon: 'md-home'
                            },
                        },
                        {
                            path: '/index/component/component2',
                            name: 'component2',
                            component: resolve => require(['@/views/page/component/component2/index.vue'], resolve),
                            meta: {
                                title: '组件2',
                                isHidden: false,
                                icon: 'md-home'
                            },
                        }
                    ]
                },
            ]
        }
    ]
})