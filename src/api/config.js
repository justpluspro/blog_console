import httpClient from '../util/http'

/**
 * 获取标签列表
 * @param params params
 * @returns Promise
 */
export function findAll (params) {
  return httpClient({
    url: '/api/configs',
    method: 'get',
    params: params
  })
}
/**
 * 保存标签
 * @param params params
 * @returns Promise
 */
export function saveConfig (params) {
  return httpClient({
    url: '/api/config',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}

/**
 * 更新标签
 * @param params params
 * @returns Promise
 */
export function updateConfig (params) {
  return httpClient({
    url: '/api/config',
    method: 'put',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}
