import axios from 'axios'
// import { setToken, getToken } from '../api/cookie'
import { getToken } from '../api/cookie'

const httpClient = axios.create({
  baseURL: 'http://localhost:8188/',
  timeout: 5000,
  headers: {
    'x-auth-token': '123456'
  }
})

// 拦截器，请求之前拦截
httpClient.interceptors.request.use(function (config) {
  const headers = config.headers
  console.log(headers)

  const token = getToken('x-auth-token')
  if (token === undefined || token === '') {
    this.$message.error('授权失败')
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截器，请求之后拦截
httpClient.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default httpClient
