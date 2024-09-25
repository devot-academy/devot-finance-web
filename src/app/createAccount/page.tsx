'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CreateAccountTemplate from '../../components/templates/createAccount'
import { createUser } from '../../api/create-user'

export default function CreateAccount() {
  const router = useRouter()

  const handleCreateUser = async (formData: {
    email: string
    password: string
    name: string
  }) => {
    try {
      const response = await createUser(formData)
      window.alert('Conta criada com sucesso!')
      router.push('/login')
      console.log('Usuário criado com sucesso:', response)
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
    }
  }

  return <CreateAccountTemplate onSubscribe={handleCreateUser} />
}
