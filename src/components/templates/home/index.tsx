'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SideBar from '../../../components/organisms/sideBar';
import Modal, { IModalRef } from '../../../components/organisms/modal';
import FinanceTemplate from '../finance';
import { styled } from 'styled-components';
import { logout } from '../../../services/authService';
import { createTransaction, getTransaction } from '../../../services/transactionService';

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  const router = useRouter();
  const modalNovaEntradaRef = useRef<IModalRef>(null);
  const modalDespesaEssencialRef = useRef<IModalRef>(null);
  const modalDespesaNaoEssencialRef = useRef<IModalRef>(null);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await getTransaction();
        setTransactions(data);
      } catch (error) {
        console.error('Erro ao carregar transações:', error);
      }
    };
    loadTransactions();
  }, []);

  const handleSubmit = async (
    form: { description: string; value: string },
    type: number
  ) => {
    const valueWithoutCurrency = form.value.replace('R$ ', '');
    const valueToFloatString = valueWithoutCurrency.replace(',', '.');
    const valueConvertedToNumber = parseFloat(valueToFloatString);

    if (isNaN(valueConvertedToNumber)) {
      alert('Erro: Valor inválido.');
      return;
    }

    const transactionData = {
      description: form.description,
      value: valueConvertedToNumber,
      type,
      userId: 22, 
    };

    try {
      await createTransaction(transactionData);
      alert('Transação criada com sucesso!');
      const updatedTransactions = await getTransaction();
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error('Erro ao criar transação:', error);
      alert('Erro ao criar transação.');
    }
  };

  return (
    <Container>
      <SideBar
        userName=""
        onLogout={() => {
          logout();
          router.push('/login');
        }}
        menuOptions={[
          {
            name: 'Nova entrada',
            onClick: () => {
              modalNovaEntradaRef.current?.onToggle();
            },
          },
          {
            name: 'Nova despesa essencial',
            onClick: () => {
              modalDespesaEssencialRef.current?.onToggle();
            },
          },
          {
            name: 'Nova despesa não essencial',
            onClick: () => {
              modalDespesaNaoEssencialRef.current?.onToggle();
            },
          },
        ]}
      />
      <Modal
        ref={modalNovaEntradaRef}
        title="Nova entrada"
        variant="default"
        onSubmit={(form) => handleSubmit(form, TRANSACTION_TYPES.BALANCE)}
      />
      <Modal
        ref={modalDespesaEssencialRef}
        title="Nova Despesa Essencial"
        variant="default"
        onSubmit={(form) => handleSubmit(form, TRANSACTION_TYPES.ESSENTIAL)}
      />
      <Modal
        ref={modalDespesaNaoEssencialRef}
        title="Nova Despesa Não Essencial"
        variant="default"
        onSubmit={(form) => handleSubmit(form, TRANSACTION_TYPES.SUPERFLUOUS)}
      />

      <FinanceTemplate transactions={transactions} />
    </Container>
  );
}
