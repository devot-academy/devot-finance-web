import React from 'react';
import * as S from './styles'; 
import Text from '../../atoms/text';
import { ColorFormat } from '../../../styles/theme/colors';

export interface ICardProps {
  title: string;
  value: string; 
  color?: keyof ColorFormat;
  textColor?: keyof ColorFormat; 
}

export default function Card({ title, value, color = "GREEN", textColor = "BACKGROUND" }: ICardProps) {
  return (
    <S.CardComponent color={color}>
      <Text type="headline-1" color={textColor}>{title}</Text> 
      <Text type='headline-1' color={textColor}>{value}</Text> 
    </S.CardComponent>
  );
}

