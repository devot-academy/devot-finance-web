import React from 'react';
import * as S from './styles';
import Text from '../../atoms/text';
import Input from '../../atoms/input';
import Button from '../../molecules/button';

interface ModalProps {
  isVisible: boolean;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, title, onClose }) => {
  if (!isVisible) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalTitle>
          <Text type={'headline-2'}>
          {title}
          </Text>
        </S.ModalTitle>
        <Text type={'headline-1'}>Descrição</Text>     
        <Input 
          type="text" 
          placeholder="" 
          onChange={(value) => console.log('Descrição:', value)} 
        />
        <Text type={'headline-1'}>Valor mensal (R$)</Text>
        <Input 
          type="text" 
          placeholder="" 
          onChange={(value) => console.log('Valor mensal:', value)} 
        />        
        <S.ButtonContent>
          <Button variant='cancel' onClick={onClose}>
            Cancelar
          </Button>
          <Button variant='default' onClick={() => console.log('Adicionando entrada...')}>
            Adicionar
          </Button>
        </S.ButtonContent>
      </S.ModalContainer>
      </S.ModalOverlay>
  );
};

export default Modal;
