/*
 * @Author: mujin
 * @Date: 2021-09-13 22:24:24
 * @LastEditTime: 2021-11-13 17:40:44
 * @Description:
 */
import * as API from '../api/api';
import utils from '../utils/utils';
const actions = {
  login({ commit }, userInfo) {
    const { account, password } = userInfo;
    return new Promise((resolve, reject) => {
      API.login({ account: account.trim(), password: password }).then(response => {
        if (response.code == '200') {
          const data = response.result;
          commit('SET_TOKEN', data.token);
          commit('SET_USERINFO', data.user);
          commit('SET_MENUS', Object.values(data.menu));
        }
        resolve(response);
      }).catch(error => {
        console.log(error)
        reject(error);
      });
    });
  }
};
export default actions;
