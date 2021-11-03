/*
 * @Author: mujin
 * @Date: 2021-09-13 23:47:10
 * @LastEditTime: 2021-11-03 17:11:52
 * @Description: 接口配置文件
 */

const serviceApi = {
  /** 登录 */
  'login': {
    url: '/hms/login',
    method: 'get',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  /** 登出 */
  'logout': {
    url: '/hms/logout',
    method: 'get',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  /** 修改密码 */
  'updatePwd': {
    url: '/user/changePass',
    method: 'PUT',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
};
export default serviceApi;
