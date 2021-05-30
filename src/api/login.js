import httpClient from '../util/http'

/**
 * 用户登录
 * @param username username
 * @param password password
 * @returns Promise
 */
export function login (username, password) {
  return httpClient({
    url: '/api/token',
    method: 'post',
    headers: {
      'Content-type': 'application/json;charset=utf8'
    },
    data: {
      username: username,
      password: password
    }
  })
}
