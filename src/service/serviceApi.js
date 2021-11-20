/*
 * @Author: mujin
 * @Date: 2021-09-13 23:47:10
 * @LastEditTime: 2021-11-17 16:48:21
 * @Description: 接口配置文件
 */

const serviceApi = {
  /** 登录 */
  'login': {
    url: '/hms/login',
    method: 'post',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  /** 登出 */
  'logout': {
    url: '/hms/logOut',
    method: 'post',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  /** 修改密码 */
  'updatePwd': {
    url: '/hms/updatePwd',
    method: 'post',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  'roleList': {
    url: '/hms/role/roleList',
    method: 'get',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  'addRole': {
    url: '/hms/role/add',
    method: 'post',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  'delRoleInfo': {
    url: '/hms/role/del',
    method: 'delete',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  'syslog': {
    url: '/hms/log/sysLog',
    method: 'get',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  'getMenuData': {
    url: '/hms/role/getAllPermissionMenus',
    method: 'get',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
};
export default serviceApi;
