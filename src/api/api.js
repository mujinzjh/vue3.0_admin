/*
 * @Author: mujin
 * @Date: 2021-09-13 23:48:59
 * @LastEditTime: 2021-09-16 17:17:13
 * @Description: 
 */
import axiosHttpUtil from "../service/axiosHttpUtils";
import serviceApi from "../service/serviceApi";

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
export default {
  login,
  loginOut,
  updatePwd
}