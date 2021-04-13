import axios from 'axios'
import router from '../router'
import { getToken } from './cookie'
// import { setToken, getToken } from '../api/cookie'
// import { getToken } from './cookie'
// import { Message } from 'element-ui'
// import router from '../router/index'

const httpClient = axios.create({
  baseURL: 'http://localhost:8188/',
  timeout: 5000,
  withCredentials: true, // 请求带上 cookie
  headers: {
    // 'x-auth-token': '123456',
    'Content-type': 'application/json;charset=utf8'
  }
})

// 拦截器，请求之前拦截
httpClient.interceptors.request.use(function (config) {
  const headers = config.headers
  console.log(headers)

  const token = getToken('x-auth-token')
  if (token !== undefined || token !== '' || token !== null) {
    console.log('这里获取 token:' + token)
    headers['x-auth-token'] = token
  }
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
  if (error.response.status === 401) {
    router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.fullPath
      }
    }).then(() => {

    })
  }
  return Promise.reject(error)
})

export default httpClient
