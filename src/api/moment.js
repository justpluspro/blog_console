import httpClient from '../util/http'

export function getMoments (obj) {
  return httpClient({
    url: '/api/moments',
    method: 'get',
    params: obj
  })
}

export function saveMoment (moment) {
  return httpClient({
    url: '/api/moment',
    method: 'post',
    data: moment
  })
}

export function deleteMoment (id) {
  return httpClient({
    url: `/api/moment/${id}`,
    method: 'delete'
  })
}

export function updateMoment (moment) {
  return httpClient({
    url: `/api/moment/${moment.id}`,
    method: 'put',
    params: moment
  })
}
