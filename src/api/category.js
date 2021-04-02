import httpClient from '../util/http'

const category = {
  /**
   * 获取分类列表
   * @param params params
   * @returns Promise
   */
  getCategoryList: function (params) {
    return httpClient({
      url: '/api/categories',
      method: 'get',
      params: params
    })
  },
  /**
   * 保存分类
   * @param params params
   * @returns Promise
   */
  saveCategory: function (params) {
    return httpClient({
      url: '/api/category',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  },
  /**
   * 删除分类
   * @param id id
   * @returns Promise
   */
  deleteCategory: function (id) {
    return httpClient({
      url: `/api/category/${id}`,
      method: 'delete'
    })
  },
  /**
   * 更新动态
   * @param params params
   * @returns Promise
   */
  updateCategory: function (params) {
    return httpClient({
      url: `/api/category/${params.id}`,
      method: 'put',
      params: params,
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  }
}

export default category
