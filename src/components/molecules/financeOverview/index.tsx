import React, { useRef } from 'react';
import * as S from './styles'; 
import Text from '../../atoms/text';
import { ColorFormat } from '../../../styles/theme/colors';
import Icon from '../../atoms/icon';
import { parseCurrency } from '../../../lib/parseCurrency';
import Modal, { IModalRef } from '../../organisms/modal';

export interface IFinanceOverviewProps {
  title: string;
  value: number;
  color?: keyof ColorFormat;
  onClick: () => void;
  textColor?: keyof ColorFormat; 
}

const FinancialSummary: React.FC<IFinanceOverviewProps> = ({ title, value, color = "BACKGROUND", onClick, textColor = "BACKGROUND" }) => {
  const modalRef = useRef<IModalRef>(null);

  const handleDelete = (id: number) => {
    console.log(`Item ${id} deletado!`);
  
  };

  const handleOpenDeleteModal = () => {
    if (modalRef.current) {
      modalRef.current.onToggle();  
    }
  };

  const handleConfirmDelete = () => {
    handleDelete(value);
    if (modalRef.current) {
      modalRef.current.onToggle();  
    }
  };

  return (
    <>
      <S.FinanceComponent color={color}>
        <S.Content>
          <S.Button onClick={handleOpenDeleteModal}>
            <Icon name='trash' size='small' color={textColor} />
          </S.Button>
          <Text type="body-1" color={textColor}>{title}</Text>
        </S.Content>
        <Text type='body-1' color={textColor}>{parseCurrency(value)}</Text>
      </S.FinanceComponent>

      <Modal
        ref={modalRef}
        title="Confirmação de Deleção"
        variant="delete"
        itemName={title}
        onSubmit={handleConfirmDelete}
      />
    </>
  );
}

export default FinancialSummary;
