import React from 'react';
import * as S from './styles';

export interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick = () => {}, ...rest }: IButtonProps) {
  return <S.ButtonComponent {...rest} onClick={onClick}>{children}</S.ButtonComponent>;
}
