import utils from '../utils/utils'
console.log(utils);
const mutations = {
  SET_TOKEN: (state, token) => {
    debugger
    state.token = token;
    utils.setSessionItem('token', token);
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
    utils.setSessionItem('userInfo', JSON.stringify(userInfo));
  }
}
export default mutations;