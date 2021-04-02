import httpClient from '../util/http'

const file = {
  /**
   * 获取文件列表
   * @param params params
   * @returns Promise
   */
  getFileList: function (params) {
    return httpClient({
      url: '/api/files',
      method: 'get',
      params: params
    })
  },
  /**
   * 保存文件
   * @param params params
   * @returns Promise
   */
  uploadFile: function (params) {
    return httpClient({
      url: '/api/file',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  },
  /**
   * 删除文件
   * @param id id
   * @returns Promise
   */
  deleteFile: function (id) {
    return httpClient({
      url: `/api/file/delete/${id}`,
      method: 'delete'
    })
  },
  /**
   * 更新标签
   * @param params params
   * @returns Promise
   */
  updateFile: function (params) {
    return httpClient({
      url: `/api/file/update/${params.id}`,
      method: 'put',
      params: params,
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  }
}

export default file
