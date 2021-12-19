/*
 * @Author: mujin
 * @Date: 2021-09-13 23:48:59
 * @LastEditTime: 2021-12-18 15:22:31
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

function getRoleListData(data) {
  return axiosHttpUtil(serviceApi.roleList, data);
}

function delRoleInfo(data) {
  return axiosHttpUtil(serviceApi.delRoleInfo, data);
}


function getMenuData(data) {
  return axiosHttpUtil(serviceApi.getMenuData, data)
}

function addRole(data) {
  return axiosHttpUtil(serviceApi.addRole, data);
}

function getRoleDataInfo(data) {
  return axiosHttpUtil(serviceApi.getRoleInfo, data);
}

function getUserList(data) {
  return axiosHttpUtil(serviceApi.getUserList, data);
}
export {
  login,
  loginOut,
  updatePwd,
  getSysLogData,
  getRoleListData, delRoleInfo,
  getMenuData,
  addRole,
  getRoleDataInfo,
  getUserList
};
