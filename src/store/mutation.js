/*
 * @Author: mujin
 * @Date: 2021-09-13 22:24:32
 * @LastEditTime: 2021-11-13 16:15:33
 * @Description: 
 */
import utils from '../utils/utils'
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    utils.setSessionItem('token', token);
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
    utils.setSessionItem('userInfo', userInfo);
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus;
    utils.setSessionItem('menus', menus);
  }
}
export default mutations;