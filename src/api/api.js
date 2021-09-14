import axiosHttpUtil from "../service/axiosHttpUtils";
import serviceApi from "../service/serviceApi";

function login (data) {
  return axiosHttpUtil(serviceApi.login, data);
}

export default {
  login
}