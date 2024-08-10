import React, { useState } from 'react';
import { InputField } from './styles';

export type IInput = {
  type: 'password' | 'text' | 'email';
  placeholder: string;
  value?: string;
  onChange: (arg0: string) => void;
};

function Input({ value = "", onChange, ...rest}: IInput) {
  const [currentValue, setCurrentValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCurrentValue(value)
    onChange && onChange(value)
  }

  return <InputField {...rest} onChange={handleChange} value={currentValue} />
}

export default Input;