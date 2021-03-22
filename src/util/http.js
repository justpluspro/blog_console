import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8188/',
  timeout: 5000,
  headers: {
    'X-Token': '123456'
  }
})

// 拦截器，请求之前拦截
http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截器，请求之后拦截
http.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default http
