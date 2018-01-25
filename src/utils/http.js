import axios from 'axios'
import router from '../router'
import {Message, Loading} from 'element-ui';
import qs from 'qs'

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:7000/admin'

// axios 配置
axios.defaults.timeout = 1000000

// 添加请求拦截器
let loadingWin;
axios.interceptors.request.use(function (request) {
  loadingWin = Loading.service({
    text: '加载中'
  });
  //request.data = qs.stringify(request.data);
  return request
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  loadingWin.close();
  return response
}, function (error) {
  return Promise.reject(error)
})

function handleUrl(url) {
  console.log(BASE_URL)
  if (url.substring(0, 4) == 'http') {
    return url;
  } else {
    return BASE_URL + url;
  }
}

/**
 * 处理请求异常
 * @param err
 */
function handleError(reject, err) {
  if (err.message.indexOf('Network Error') >= 0) {
    Message.error('网络异常')
  } else if (err.message.indexOf('timeout') >= 0) {
    Message.error('请求超时,请刷新重试')
  }
  reject(err)
}

/**
 * 处理请求成功
 * @param response
 */
function handleSuccess(resolve, response) {
  let code = response.data.code || 0
  let msg = response.data.message || ''
  if (code == 5006) { // 登录失效
    Message.error(msg)
    router.push('/login')
  } else if (code != 200) {
    Message.error(msg)
  } else {
    resolve(response.data)
  }
}

const http = {
  // 错误全局提示
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios({
              method: 'get',
              url: handleUrl(url),
      params: params
  }).then(response => {
      handleSuccess(resolve, response)
    },
      err => {
      handleError(reject, err)
    })
  })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios({
              method: 'post',
              url: handleUrl(url),
      data: qs.stringify(params)
  }).then(response => {
      handleSuccess(resolve, response)
    },
      err => {
      handleError(reject, err)
    })
  })
  },
  axios: axios
}

export default http
