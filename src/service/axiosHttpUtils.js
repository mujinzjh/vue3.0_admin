import vue from 'vue'
import axios from 'axios';
import utils from '../utils/utils'
import store from '../store/index'
import qs from 'qs';
import Constans from '../config/constans';


axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers['Authorization'] = utils.getSessionItem('token');
  }
  return config;
}, err => {
  return Promise.reject(err);
})

axios.interceptors.response.use(res => {
  return res;
}, err => {
  return Promise.reject(err);
});

const handleHeader = (opts) => {
  let defaultHeader;
  if (opts.header) {
    defaultHeader = opts.header;
  } else if (opts.method.toUpperCase() === 'GET') {
    defalutHeader = {
      'X-Request-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    };
  } else {
    defalutHeader = {
      'X-Request-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8'
    };
  }
  return defaultHeader
}


const handleOptions = (opts, baseURL, data) => {
  let publicParams = {},
    defaultHeader = handleHeader(opts),
    httpDefaultOpts = {
      method: opts.method,
      baseURL,
      url: opts.url,
      timeout: opts.timeout || 10000,
      headers: defaultHeader,
      responseType: opts.responseType || ''
    }

  if (opts.method.toUpperCase() === 'GET' || opts.method.toUpperCase() === 'DELETE') {
    httpDefaultOpts.params = Object.assign(publicParams, data);
  } else {
    httpDefaultOpts.data = handleParamData(defaultHeader, data)
  }
  return httpDefaultOpts;

}

const handleParamData = (defaultHeader, data) => {
  return defaultHeader && defaultHeader['Content-Type'] === 'applicaation/x-www-form-urlencoded' ? qs.stringify(data) : data;
}

const isParamsVaild = (params) => {
  return Boolean(params.method && params.url);
}

function axiosHttpUtils(opts, data) {
  let baseURL = opts.baseURL || Constans.BASE_URL, promise;
  const httpDefaultOpts = handleOptions(opts, baseURL, data);

  promise = new Promise((resolve, reject) => {
    if (!isParamsVaild(opts)) {
      return false;
    }
    axios(httpDefaultOpts).then(response => {
      const res = response.data;
      if (res.code === 200) {
        resolve(res);
      } else if (res.code === 401) {
        vue.$router.push('/');
        sessionStorage.clear();
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    })
  });
  return promise;
}

export default axiosHttpUtils;
