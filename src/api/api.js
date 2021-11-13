/*
 * @Author: mujin
 * @Date: 2021-09-13 23:48:59
 * @LastEditTime: 2021-11-09 15:27:29
 * @Description:
 */
import axiosHttpUtil from '../service/axiosHttpUtils';
import serviceApi from '../service/serviceApi';

/**
 * @method 登录
 * @param {*} data 登录信息
 * @returns 返回promise对象
 */
function login(data) {
  return axiosHttpUtil(serviceApi.login, data);
}
/**
 * @method:  退出
 * @param {*}
 * @return {*} 返回promise对象
 */
function loginOut() {
  return axiosHttpUtil(serviceApi.logout);
}
/**
 * @method:
 * @param {*}
 * @return {*}
 */
function updatePwd(data) {
  return axiosHttpUtil(serviceApi.updatePwd, data);
}

function getSysLogData(data) {
  return axiosHttpUtil(serviceApi.syslog, data);
}

export {
  login,
  loginOut,
  updatePwd,
  getSysLogData
};
