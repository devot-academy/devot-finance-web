'use client'

import React from 'react'
import CreateAccountTemplate from '../../components/templates/createAccount'
import { createUser } from '../../api/create-user'

export default function CreateAccount() {
  const handleCreateUser = async (formData: {
    email: string
    password: string
    name: string
  }) => {
    try {
      const response = await createUser(formData)
      console.log('Usuário criado com sucesso:', response)
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
    }
  }

  return <CreateAccountTemplate onSubscribe={handleCreateUser} />
}
