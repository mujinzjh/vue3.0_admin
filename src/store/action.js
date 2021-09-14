import {login} from '../api/api'
const actions = {
  login({ commit }, userInfo) {
    const { user, password } = userInfo
    return new Promise((resolve, reject) => {
      login({username: user.trim(), password: password }).then(response => {
        const { data } = response.data.data
        commit('SET_TOKEN', data.token)
        commit('SET_USERINFO',data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}
export default actions;