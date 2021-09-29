// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

//引入iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '../static/css/main.css';
// import "@/assets/theme/t.less ";

//引入工具方法
import utils from "./utils/utils";
Vue.prototype.$utils = utils;

// 引入基础配置
import baseConfig from "../static/baseConfig/index";
window.$baseConfig = baseConfig;

// 使用粒子特效插件
import VueParticles from "vue-particles";
Vue.use(VueParticles);

Vue.use(ViewUI); //使用iviewUI框架

Vue.config.productionTip = false;
import store from "./store/index";
Vue.prototype.$axios = axios;
//新增事件总线机制eventBus
window.EventBus = new Vue();

/*引入国际化配置文件*/
import i18n from './locale';
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: { App },
    template: '<App/>'
})