import httpClient from '../util/http'

const blackip = {
  /**
   * 获取黑名单列表
   * @param params params
   * @returns Promise
   */
  getBlackIpList: function (params) {
    return httpClient({
      url: '/api/blackips',
      method: 'get',
      params: params
    })
  },
  /**
   * 保存黑名单
   * @param params params
   * @returns Promise
   */
  saveBlackIp: function (params) {
    return httpClient({
      url: '/api/blackip',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  },
  /**
   * 删除黑名单
   * @param id id
   * @returns Promise
   */
  deleteBlackIp: function (id) {
    return httpClient({
      url: `/api/blackip/${id}`,
      method: 'delete'
    })
  }
}

export default blackip
