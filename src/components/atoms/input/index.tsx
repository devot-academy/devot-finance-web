import React, { useState } from 'react';
import * as S from './styles';

export interface IInputProps {
  type?: 'password' | 'text' | 'email' | 'number' | 'currency';
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  [key: string]: any;
}

function formatCurrency(value: string): string {
  const numericValue = value.replace(/\D/g, '');
  if (!numericValue) return '';
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parseFloat(numericValue) / 100);
  return formattedValue;
}

export default function Input({
  value = '',
  onChange,
  type = 'text',
  ...rest
}: IInputProps) {
  const [currentValue, setCurrentValue] = useState(
    type === 'currency' && value ? formatCurrency(value) : value
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (type === 'number') {
      if (!/^\d*$/.test(inputValue)) return;
    } else if (type === 'currency') {
      inputValue = formatCurrency(inputValue);
    }

    setCurrentValue(inputValue);
    onChange(inputValue);
  };

  return (
    <S.InputField
      {...rest}
      type={type === 'currency' ? 'text' : type}
      value={currentValue}
      onChange={handleChange}
    />
  );
}
