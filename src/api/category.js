import httpClient from '../util/http'

export function getCategoryList (params) {
  return httpClient({
    url: '/api/categories',
    method: 'get',
    params: params
  })
}

export function saveCategory (params) {
  return httpClient({
    url: '/api/category',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}

export function deleteCategory (id) {
  return httpClient({
    url: `/api/category/${id}`,
    method: 'delete'
  })
}

export function updateCategory (params) {
  return httpClient({
    url: `/api/category/${params.id}`,
    method: 'put',
    params: params,
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}
