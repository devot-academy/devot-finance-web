import React from 'react';
import getTextComponent from './styles';
import { ColorFormat } from '../../../styles/theme/colors';

type TextType = 'headline-1' | 'headline-2' | 'subtitle-1' | 'body-1';

export interface IText {
  type: TextType;
  color?: keyof ColorFormat;
  children: React.ReactNode;
}

export default function Text(props: IText) {
  const Component = getTextComponent(props.type);
  return <Component {...props}>{props.children}</Component>;
}