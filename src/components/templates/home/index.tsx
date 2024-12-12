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

type IHomeTemplateProps = {
  onSubscribe: (formData: {
    description: string;
    value: number;
    type: number;
    userId: number;
  }) => void;
};

const TRANSACTION_TYPES = {
  BALANCE: 1,
  ESSENTIAL: 2,
  SUPERFLUOUS: 3,
};

export default function HomeTemplate({ onSubscribe }: IHomeTemplateProps) {
  const modalNovaEntradaRef = useRef<IModalRef>(null);
  const modalDespesaEssencialRef = useRef<IModalRef>(null);
  const modalDespesaNaoEssencialRef = useRef<IModalRef>(null);

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

      {/* Modal Nova Entrada */}
      <Modal
        ref={modalNovaEntradaRef}
        title="Nova entrada"
        variant="default"
        onSubmit={(form) => {
          const formData = {
            description: form.description.trim(),
            value: parseFloat(form.value),
            type: TRANSACTION_TYPES.BALANCE, // Tipo correspondente para Nova Entrada
            userId: 1,
          };

          if (isNaN(formData.value)) {
            alert('Erro: Valor inválido.');
            return;
          }

          onSubscribe(formData);
        }}
      />

      {/* Modal Nova Despesa Essencial */}
      <Modal
        ref={modalDespesaEssencialRef}
        title="Nova Despesa Essencial"
        variant="default"
        onSubmit={(form) => {
          const formData = {
            description: form.description.trim(),
            value: parseFloat(form.value),
            type: TRANSACTION_TYPES.ESSENTIAL, // Tipo correspondente para Despesa Essencial
            userId: 1,
          };

          if (isNaN(formData.value)) {
            alert('Erro: Valor inválido.');
            return;
          }

          onSubscribe(formData);
        }}
      />

      {/* Modal Nova Despesa Não Essencial */}
      <Modal
        ref={modalDespesaNaoEssencialRef}
        title="Nova Despesa Não Essencial"
        variant="default"
        onSubmit={(form) => {
          const formData = {
            description: form.description.trim(),
            value: parseFloat(form.value),
            type: TRANSACTION_TYPES.SUPERFLUOUS, // Tipo correspondente para Despesa Não Essencial
            userId: 1,
          };

          if (isNaN(formData.value)) {
            alert('Erro: Valor inválido.');
            return;
          }

          onSubscribe(formData);
        }}
      />

      {/* Exibe o template de finanças */}
      <FinanceTemplate />
    </Container>
  )
}
