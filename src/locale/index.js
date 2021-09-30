/*
 * @Author: mujin
 * @Date: 2021-09-29 11:09:29
 * @LastEditTime: 2021-09-30 14:17:53
 * @Description:引入国际化配置文件
 */

import Vue from "vue";
import iView from "iview";
import VueI18n from 'vue-i18n';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';

import enUs from './lang/en'
import zhCN from './lang/zh';

Vue.use(VueI18n);

const messages = {
  en: Object.assign(enUs, en),
  zh: Object.assign(zhCN, zh)
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
});

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
});

export default i18n;