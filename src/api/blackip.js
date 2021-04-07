import httpClient from '../util/http'

export function getBlackIps (params) {
  return httpClient({
    url: '/api/blackips',
    method: 'get',
    params: params
  })
}

export function saveBlackIp (obj) {
  return httpClient({
    url: '/api/blackip',
    method: 'post',
    data: obj
  })
}

export function deleteBlackIp (id) {
  return httpClient({
    url: `/api/blackip/${id}`,
    method: 'delete'
  })
}
