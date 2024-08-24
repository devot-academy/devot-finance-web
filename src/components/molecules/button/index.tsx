import React from 'react';
import * as S from './styles';

export interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'cancel' | 'danger' | 'disabled';
}

export default function Button({ children, onClick = () => {}, variant = 'default', ...rest }: IButtonProps) {
  return (
    <S.ButtonComponent variant={variant} onClick={onClick} {...rest}>
      {children}
    </S.ButtonComponent>
  );
}