import httpClient from '../util/http'

export function getCategories () {
  return httpClient({
    url: '/api/categories',
    method: 'get'
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
    data: params
  })
}
