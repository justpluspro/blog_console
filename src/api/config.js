import httpClient from '../util/http'

const tag = {
  /**
   * 获取标签列表
   * @param params params
   * @returns Promise
   */
  getTagList: function (params) {
    return httpClient({
      url: '/api/tags',
      method: 'get',
      params: params
    })
  },
  /**
   * 保存标签
   * @param params params
   * @returns Promise
   */
  saveTag: function (params) {
    return httpClient({
      url: '/api/tag',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  },
  /**
   * 删除标签
   * @param id id
   * @returns Promise
   */
  deleteTag: function (id) {
    return httpClient({
      url: `/api/tag/${id}`,
      method: 'delete'
    })
  },
  /**
   * 更新标签
   * @param params params
   * @returns Promise
   */
  updateTag: function (params) {
    return httpClient({
      url: `/api/tag/${params.id}`,
      method: 'put',
      params: params,
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  }
}

export default tag
