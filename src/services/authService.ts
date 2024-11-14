import { saveToken, getToken, removeToken } from './storage'
import api from './axiosConfig'

export const authenticate = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth', { email, password })
    const { token } = response.data

    await saveToken(token)
    return token
  } catch (error) {
    console.error('Erro na autenticação:', error)
    throw new Error('Falha ao autenticar. Verifique as credenciais.')
  }
}

export const logout = async () => {
  await removeToken()
}

export const isAuthenticated = async () => {
  const token = await getToken()
  return !!token
}
export { getToken }
