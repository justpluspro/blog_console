import httpClient from '../util/http'

/**
 * 获取标签列表
 * @param params params
 * @returns Promise
 */
export function getTagList (params) {
  return httpClient({
    url: '/api/tags',
    method: 'get',
    params: params
  })
}
/**
 * 保存标签
 * @param params params
 * @returns Promise
 */
export function saveTag (params) {
  return httpClient({
    url: '/api/tag',
    method: 'post',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}

/**
 * 删除标签
 * @param id id
 * @returns Promise
 */
export function deleteTag (id) {
  return httpClient({
    url: `/api/tag/${id}`,
    method: 'delete'
  })
}
/**
 * 更新标签
 * @param params params
 * @returns Promise
 */
export function updateTag (params) {
  return httpClient({
    url: `/api/tag/${params.id}`,
    method: 'put',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}
