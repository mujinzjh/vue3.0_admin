/*
 * @Author: mujin
 * @Date: 2021-09-13 22:24:24
 * @LastEditTime: 2021-11-03 17:36:52
 * @Description:
 */
import API from '../api/api';
const actions = {
  login({ commit }, userInfo) {
    const { account, password } = userInfo;
    return new Promise((resolve, reject) => {
      API.login({ account: account.trim(), password: password }).then(response => {
        console.log(response);
        const data = response.result;
        commit('SET_TOKEN', data.token);
        commit('SET_USERINFO', data.user);
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }
};
export default actions;
