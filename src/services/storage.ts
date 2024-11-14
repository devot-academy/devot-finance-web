import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('userToken', token)
  } catch (error) {
    console.error('Erro ao salvar o token:', error)
  }
}

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken')
  } catch (error) {
    console.error('Erro ao obter o token:', error)
    return null
  }
}

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken')
  } catch (error) {
    console.error('Erro ao remover o token:', error)
  }
}
