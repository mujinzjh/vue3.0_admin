import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = resolve => require(['../views/common/index.vue'],resolve);
const Login = resolve => require(['@/views/page/login/login.vue'],resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
