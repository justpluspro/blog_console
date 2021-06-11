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
    data: JSON.stringify(moment),
    headers: {
      'Content-Type': 'application/json;charset=utf8'
    }
  })
}

export function deleteMoment (id) {
  return httpClient({
    url: `/api/moment/${id}`,
    method: 'delete'
  })
}

export function getMoment (id) {
  return httpClient({
    url: `/api/moment/${id}`,
    method: 'get'
  })
}

export function updateMoment (moment) {
  return httpClient({
    url: `/api/moment/${moment.id}`,
    method: 'put',
    params: moment
  })
}
