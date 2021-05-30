import httpClient from '../util/http'

/**
 * 获取文件列表
 * @param params params
 * @returns Promise
 */
export function getFileList (params) {
  return httpClient({
    url: '/api/files',
    method: 'get',
    params: params
  })
}
/**
 * 保存文件
 * @param params params
 * @returns Promise
 */
export function uploadFile (params) {
  return httpClient({
    url: '/api/file',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}

/**
 * 删除文件
 * @param id id
 * @returns Promise
 */
export function deleteFile (id) {
  return httpClient({
    url: `/api/file/delete/${id}`,
    method: 'delete'
  })
}

/**
 * 更新标签
 * @param params params
 * @returns Promise
 */
export function updateFile (params) {
  return httpClient({
    url: `/api/file/update/${params.id}`,
    method: 'put',
    params: params,
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}
