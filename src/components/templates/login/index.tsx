import React, { useState } from 'react'
import * as S from './styles'
import Icon from '../../atoms/icon'
import Text from '../../atoms/text'
import Input from '../../atoms/input'
import Button from '../../molecules/button'
import Link from '../../molecules/link'
import { authenticate } from '../../../services/authService'
import { useRouter } from 'next/navigation'
import { saveToken, getToken } from '../../../services/storage'

type LoginTemplateProps = {
  onSuccess: () => void
}

export default function LoginTemplate({ onSuccess }: LoginTemplateProps) {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()

  const handleSubmit = async () => {
    const { email, password } = form

    if (!email || !password) {
      alert('Preencha todos os campos.')
      return
    }

    try {
      const token = await authenticate(email, password)
      if (token) {
        await saveToken(token)
        const storedToken = await getToken()
        if (storedToken) {
          alert('Login realizado com sucesso!')
          onSuccess()
        }
      }
    } catch (error) {
      alert('Erro ao realizar login. Verifique suas credenciais.')
      console.error('Erro no login:', error)
    }
  }

  return (
    <S.Container>
      <S.FormContent>
        <S.FinanceLogoContent>
          <Icon name="logo" size="medium" color="PRIMARY" />
          <Text type="headline-1" color="PRIMARY">
            FINANCE DEVOT
          </Text>
        </S.FinanceLogoContent>
        <S.Title>
          <Text type="headline-1" color="PRIMARY">
            Login
          </Text>
        </S.Title>
        <S.Form>
          <S.InputContent>
            <S.Label>
              <Text type="body-1" color="PRIMARY">
                E-mail
              </Text>
            </S.Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={value => setForm({ ...form, email: value })}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label>
              <Text type="body-1" color="PRIMARY">
                Senha
              </Text>
            </S.Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={form.password}
              onChange={value => setForm({ ...form, password: value })}
            />
          </S.InputContent>
          <S.ButtonContent>
            <Button onClick={handleSubmit}>ENTRAR</Button>
          </S.ButtonContent>
        </S.Form>
        <S.CreateAccountContent>
          <Text type="body-1" color="PRIMARY">
            Não tem uma conta?
          </Text>
          <Link href="/createAccount" type="headline-1">
            Criar conta
          </Link>
        </S.CreateAccountContent>
      </S.FormContent>
      <S.LogoContent>
        <Icon name="logo" size="medium" color="BACKGROUND" />
        <S.LogoTextContent>
          <Text type="headline-1" color="BACKGROUND">
            DEVOT
          </Text>
          <Text type="subtitle-1" color="BACKGROUND">
            LEVEL UP WITH US
          </Text>
        </S.LogoTextContent>
      </S.LogoContent>
    </S.Container>
  )
}
