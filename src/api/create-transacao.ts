import axios from 'axios';

type ICreateTransaction = {
  value: number;
  description: string;
  type: number;
  userId: number;
};

export async function createTransaction(data: ICreateTransaction) {
  try {
    const token =""; 
    const response = await axios.post('http://localhost:3001/transaction', data, {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar a transação:', error);
    throw error;
  }
}
