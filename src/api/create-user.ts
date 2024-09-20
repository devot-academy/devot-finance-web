import axios from 'axios'

type ICreateUser = {
  email: string
  name: string
  password: string
}

export async function createUser(data: ICreateUser) {
  try {
    const response = await axios.post('http://localhost:3001/user', data)
    return response.data
  } catch (error) {
    console.error('Erro ao criar o usuário:', error)
    throw error
  }
}
