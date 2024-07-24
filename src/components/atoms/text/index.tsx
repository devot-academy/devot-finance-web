import React from 'react';
import * as S from './styles';
import { ColorFormat } from '../../../styles/theme/colors';

export interface ITextProps {
  type: S.IType;
  color?: keyof ColorFormat;
  children: React.ReactNode;
}

export default function Text({ children, ...rest }: ITextProps) {
  return <S.TextComponent {...rest}>{children}</S.TextComponent>;
}