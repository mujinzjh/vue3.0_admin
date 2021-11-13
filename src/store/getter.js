/*
 * @Author: mujin
 * @Date: 2021-11-13 14:43:47
 * @LastEditTime: 2021-11-13 15:04:42
 * @Description:
 */

const getters = {
  menus: state => {
    return state.menus;
  },
  userInfo: state => {
    return state.userInfo;
  },
  token: sate => {
    return state.token;
  }
}
export default getters;
