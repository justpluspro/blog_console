import httpClient from '../util/http'

export function findAll () {
  return httpClient({
    url: '/api/templates',
    method: 'get'
  })
}

export function findTemplate (id) {
  return httpClient({
    url: '/api/' + id + '/template',
    method: 'get'
  })
}

export function saveTemplate (params) {
  return httpClient({
    url: '/api/template',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}

export function deleteTemplate (id) {
  return httpClient({
    url: `/api/template/${id}`,
    method: 'delete'
  })
}

export function updateTemplate (params) {
  return httpClient({
    url: `/api/template/${params.id}`,
    method: 'put',
    data: params
  })
}
