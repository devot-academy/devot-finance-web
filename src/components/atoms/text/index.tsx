import React from 'react';
import * as Style from './styles';
import { typeMapper } from './styles';
import { ColorFormat } from '../../../styles/theme/colors';

export interface IText {
  type: keyof typeof typeMapper;
  color?: keyof ColorFormat;
  children: React.ReactNode;
}

export default function Text(props: IText) {
  return <Style.TextComponent {...props} />;
}