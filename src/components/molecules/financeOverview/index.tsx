import React from 'react';
import * as S from './styles'; 
import Text from '../../atoms/text';
import { ColorFormat } from '../../../styles/theme/colors';
import Icon from '../../atoms/icon';
import { parseCurrency } from '../../../lib/parseCurrency';

export interface IFinanceOverviewProps {
  title: string;
  value: number;
  color?: keyof ColorFormat;
  onClick: () => void;
  textColor?: keyof ColorFormat; 
}

const FinancialSummary: React.FC<IFinanceOverviewProps> = ({ title, value, color = "BACKGROUND", onClick, textColor = "BACKGROUND" }) => {
  return (
    <S.FinanceComponent color={color}>
      <S.Content>
        <S.Button onClick={onClick}>
          <Icon name='trash' size='small' color={textColor} /> 
        </S.Button>
        <Text type="body-1" color={textColor}>{title}</Text>
      </S.Content>
      <Text type='body-1' color={textColor}>{parseCurrency(value)}</Text> 
    </S.FinanceComponent>
  );
}

export default FinancialSummary;
