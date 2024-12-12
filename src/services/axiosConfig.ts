import axios from 'axios'
import { getToken } from './storage'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use(
  async config => {
    const token = await getToken()
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

export default api
