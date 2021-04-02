import Cookies from 'js-cookie'

export function getToken (name) {
  return Cookies.get(name)
}

export function setToken (name, value) {
  Cookies.set(name, value)
}
