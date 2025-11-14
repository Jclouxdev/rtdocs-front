const API_HOST_URL = import.meta.env.VITE_API_HOST_URL || 'http://192.168.1.54:3000'
const API_BASE_URL = API_HOST_URL

export const AuthEndpoints = {
  SIGNUP: API_BASE_URL + '/users',
  LOGIN: API_BASE_URL + '/auth/login',
}