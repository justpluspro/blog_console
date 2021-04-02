import httpClient from '../util/http'

const moment = {
  /**
   * 获取动态列表
   * @param params params
   * @returns Promise
   */
  getMomentList: function (params) {
    return httpClient({
      url: '/api/moments',
      method: 'get',
      params: params
    })
  },
  /**
   * 保存动态
   * @param params params
   * @returns Promise
   */
  saveMoment: function (params) {
    return httpClient({
      url: '/api/moment',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  },
  /**
   * 删除动态
   * @param id id
   * @returns Promise
   */
  deleteMoment: function (id) {
    return httpClient({
      url: `/api/moment/${id}`,
      method: 'delete'
    })
  },
  /**
   * 更新动态
   * @param params params
   * @returns Promise
   */
  updateMoment: function (params) {
    return httpClient({
      url: `/api/moment/${params.id}`,
      method: 'put',
      params: params,
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  }
}

export default moment
