import axiosHttpUtil from "../service/axiosHttpUtils";
import serviceApi from "../service/serviceApi";

function login () {
  return axiosHttpUtil(serviceApi.login);
}

export default {
  login
}