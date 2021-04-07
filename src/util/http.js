import axios from 'axios'
// import { setToken, getToken } from '../api/cookie'
// import { getToken } from './cookie'
// import { Message } from 'element-ui'
// import router from '../router/index'

const httpClient = axios.create({
  baseURL: 'http://localhost:8188/',
  timeout: 5000,
  withCredentials: true, // 请求带上 cookie
  headers: {
    'x-auth-token': '123456',
    'Content-type': 'application/json;charset=utf8'
  }
})

// 拦截器，请求之前拦截
httpClient.interceptors.request.use(function (config) {
  const headers = config.headers
  console.log(headers)

  // const token = getToken('x-auth-token')
  // if (token === undefined || token === '') {
  //   Message({
  //     message: '授权失败',
  //     type: 'error',
  //     duration: 5000
  //   })
  //  router.push('/login')
  // }

  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截器，请求之后拦截
httpClient.interceptors.response.use(function (response) {
  console.log('响应数据' + response)
  // 这里直接返回数据
  return response.data
}, function (error) {
  console.log('出错了' + error)
  return Promise.reject(error)
})

export default httpClient
