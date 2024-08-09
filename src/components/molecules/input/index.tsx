import React from 'react';
import { InputField } from './styles';

export type IInput = {
  type: 'password' | 'text' | 'email';
  placeholder: string;
};

function Input(props: IInput) {
  return <InputField {...props} />;
}

export default Input;