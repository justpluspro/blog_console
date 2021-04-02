import httpClient from '../util/http'

const article = {
  /**
   * 获取文章列表
   * @param params params
   * @returns Promise
   */
  getArticleList: function (params) {
    return httpClient({
      url: '/api/articles',
      method: 'get',
      params: params
    })
  },
  /**
   * 保存文章
   * @param params params
   * @returns Promise
   */
  saveArticle: function (params) {
    return httpClient({
      url: '/api/article',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  },
  /**
   * 删除文章
   * @param id id
   * @returns Promise
   */
  deleteArticle: function (id) {
    return httpClient({
      url: `/api/article/${id}`,
      method: 'delete'
    })
  },
  /**
   * 更新文章
   * @param params params
   * @returns Promise
   */
  updateArticle: function (params) {
    return httpClient({
      url: `/api/article/${params.id}`,
      method: 'put',
      params: params,
      headers: {
        'Content-Type': 'application/json;charset=utf8'
      }
    })
  }
}

export default article
