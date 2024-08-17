import React from 'react';
import * as S from './styles'; 
import Text from '../../atoms/text';
import { ColorFormat } from '../../../styles/theme/colors';
import Icon from '../../atoms/icon';


export interface IlistProps {
  title: string;
  value: string;
  color?: keyof ColorFormat;
  

}

export default function List({title, value, color="BACKGROUND"}: IlistProps) {
  return (
    <S.ListComponent color={color}>
        <S.Content>
            <Icon name='trash' size='small' color='PRIMARY'/>
            <Text type="body-1" color="GREEN">{title}</Text>
        </S.Content>
        <Text type= 'body-1' color="GREEN">{value}</Text>
      
    </S.ListComponent>
  )}