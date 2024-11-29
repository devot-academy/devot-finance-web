import axios from 'axios';

type ICreateTransaction = {
  value: number;
  description: string;
  type: number;
  userId: number;
};

export async function createTransaction(data: ICreateTransaction) {
  try {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaXNzYXRrbTE3QGdtYWlsLmNvbSIsImlhdCI6MTczMjgyMDQ1MiwiZXhwIjoxNzMzNDI1MjUyfQ.t--vVfUZeqX_ptR68hMqpRflWcVU26i0wWMxfaeBmTQ"; // Substitua pelo token real
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
