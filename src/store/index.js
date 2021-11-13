/*
 * @Author: mujin
 * @Date: 2021-09-13 22:24:13
 * @LastEditTime: 2021-11-13 15:00:27
 * @Description: 
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './action';
import mutations from './mutation';
import getters from './getter';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store;