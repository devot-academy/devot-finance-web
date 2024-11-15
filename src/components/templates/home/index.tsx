'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import SideBar from '../../../components/organisms/sideBar'
import Modal, { IModalRef } from '../../../components/organisms/modal'
import FinanceTemplate from '../finance'
import { styled } from 'styled-components'
import { getToken } from '../../../services/storage'
import { logout } from '../../../services/authService'

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function HomeTemplate({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const modalNovaEntradaRef = useRef<IModalRef>(null)
  const modalDespesaEssencialRef = useRef<IModalRef>(null)
  const modalDespesaNaoEssencialRef = useRef<IModalRef>(null)

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await getToken()
      if (token) {
        setIsAuthenticated(true)
      } else {
        router.push('/login')
      }
    }
    checkAuthentication()
  }, [router])

  if (!isAuthenticated) return <p>Carregando...</p>

  return (
    <Container>
      <SideBar
        userName=""
        onLogout={() => {
          logout()
          router.push('/login')
        }}
        menuOptions={[
          {
            name: 'Nova entrada',
            onClick: () => {
              modalNovaEntradaRef.current?.onToggle()
            }
          },
          {
            name: 'Nova despesa essencial',
            onClick: () => {
              modalDespesaEssencialRef.current?.onToggle()
            }
          },
          {
            name: 'Nova despesa não essencial',
            onClick: () => {
              modalDespesaNaoEssencialRef.current?.onToggle()
            }
          }
        ]}
      />
      {children}
      <Modal
        ref={modalNovaEntradaRef}
        title="Nova entrada"
        variant="logout"
        onSubmit={form => {
          console.log('Nova Entrada: ', form)
        }}
      />
      <Modal
        ref={modalDespesaEssencialRef}
        title="Nova Despesa Essencial"
        variant="default"
        onSubmit={form => {
          console.log('Nova Despesa Essencial: ', form)
        }}
      />
      <Modal
        ref={modalDespesaNaoEssencialRef}
        title="Nova Despesa Não Essencial"
        variant="default"
        onSubmit={form => {
          console.log('Nova Despesa Não Essencial: ', form)
        }}
      />
      <FinanceTemplate />
    </Container>
  )
}
