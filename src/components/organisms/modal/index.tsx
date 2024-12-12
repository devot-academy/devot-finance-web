import React, { forwardRef, Ref, useState, useImperativeHandle, useEffect } from 'react';
import * as S from './styles';
import Text from '../../atoms/text';
import Input from '../../atoms/input';
import Button from '../../molecules/button';

export type IModalRef = {
  stateModal: boolean;
  onToggle: () => void;
};

type IModalProps = {
  title: string;
  onSubmit: (form: {
    description: string;
    value: string;
  }) => void;
  onSubscribe?: (formData: {
    description: string;
    value: number;
    type: number;
    userId: number;
  }) => void;
  variant?: 'default' | 'delete' | 'logout';
  itemName?: string;
};

const Modal = forwardRef(function ModalForward(
  { title, onSubmit, onSubscribe, variant = 'default', itemName }: IModalProps,
  ref: Ref<IModalRef>
) {
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState({
    description: '',
    value: '',
    type: '0', 
  });

  const handleToggle = () => setToggle(curr => !curr);

  const handleInputChange = (key: keyof typeof form, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (validation) {
      if (onSubscribe) {
        const formData = {
          description: form.description.trim(),
          value: parseInt(form.type.replace(/\D/g, ''), 10) || 0, 
          type: parseFloat(form.value),
          userId: 1, 
        };
        onSubscribe(formData);
      } else {
        onSubmit({ description: form.description.trim(), value: form.value.trim() });
      }
      handleToggle();
    }
  };

  const validation = form.description.trim() !== '' && form.value.trim() !== '' && !isNaN(parseFloat(form.value));

  useImperativeHandle(
    ref,
    () => ({
      stateModal: toggle,
      onToggle: handleToggle,
    }),
    [toggle]
  );

  useEffect(() => {
    if (toggle) {
      const input = document.querySelector('input');
      if (input) input.focus();
    }
  }, [toggle]);

  if (!toggle) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer variant={variant}>
        <S.ModalTitle>
          <Text type="headline-2">{title}</Text>
        </S.ModalTitle>

        {variant === 'default' && (
          <>
            <Text type="headline-1">Descrição</Text>
            <Input
              type="text"
              placeholder="Digite a descrição"
              onChange={value => handleInputChange('description', value)}
              value={form.description}
            />
            <Text type="headline-1">Valor mensal (R$)</Text>
            <Input
              type="currency"
              placeholder="R$"
              onChange={value => handleInputChange('value', value)}
              value={form.value}
            />
          </>
        )}

        {variant === 'delete' && (
          <Text type="body-1">
            Tem certeza que deseja remover o item <strong>{itemName}</strong>?
          </Text>
        )}

        {variant === 'logout' && (
          <Text type="body-1">Tem certeza que deseja sair?</Text>
        )}

        <S.ButtonContent>
          <Button variant="cancel" onClick={handleToggle}>
            Não
          </Button>
          <Button
            variant={variant === 'delete' || variant === 'logout' ? 'danger' : 'default'}
            onClick={handleSubmit}
          >
            {variant === 'delete' || variant === 'logout' ? 'Sim' : 'Adicionar'}
          </Button>
        </S.ButtonContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
});

export default Modal;

