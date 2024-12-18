'use client';

import React from 'react';
import HomeTemplate from '../../components/templates/home';
import { useRouter } from 'next/navigation'; 
import { createTransaction } from '../../api/create-transacao'; 

export default function Home() {
  const router = useRouter();

  
  const handleCreateTransaction = async (formData: {
    description: string;
    value: number;
    type: number;
    userId: number;
  }) => {
    console.log("handleCreateTransaction", formData)
    try {
      const response = await createTransaction(formData)
      console.log('Transação criada com sucesso:', response);
      window.alert('Transação criada com sucesso!');
      router.push('/home');
    } catch (error) {
      console.error('Erro ao criar transação:', error);
      window.alert('Erro ao criar a transação. Por favor, tente novamente.');
    }
  };

  return (
    <HomeTemplate onSubscribe={handleCreateTransaction} />
  );
}
