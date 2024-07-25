import React from 'react';
import * as S from './styles';

export interface IButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: IButtonProps) {
  return <S.ButtonComponent {...rest}>{children}</S.ButtonComponent>;
}
