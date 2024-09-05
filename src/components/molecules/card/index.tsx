import React from 'react';
import * as S from './styles'; 
import Text from '../../atoms/text';
import { ColorFormat } from '../../../styles/theme/colors';
import { parseCurrency } from '../../../lib/parseCurrency';

export interface ICardProps {
  title: string;
  value: number; 
  color?: keyof ColorFormat;
  textColor?: keyof ColorFormat; 
}

export default function Card({ title, value, color = "GREEN", textColor = "BACKGROUND" }: ICardProps) {
  return (
    <S.CardComponent color={color}>
      <Text type="headline-1" color={textColor}>{title}</Text> 
      <Text type='headline-1' color={textColor}>{parseCurrency(value)}</Text> 
    </S.CardComponent>
  );
}

