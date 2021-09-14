import API from '../api/api'
const actions = {
  login({ commit }, userInfo) {
    const { user, password } = userInfo
    return new Promise((resolve, reject) => {
      API.login({username: user.trim(), password: password }).then(response => {
        const data = response.data.data;
        commit('SET_TOKEN', data.token);
        commit('SET_USERINFO',data);
        resolve(response);
      }).catch(error => {
        reject(error)
      })
    })
  },
}
export default actions;