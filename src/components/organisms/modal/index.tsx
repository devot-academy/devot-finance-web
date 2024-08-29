import React, { forwardRef, Ref, useState, useImperativeHandle } from 'react';
import * as S from './styles';
import Text from '../../atoms/text';
import Input from '../../atoms/input';
import Button from '../../molecules/button';

export type IModalRef = {
  stateModal: boolean;
  onToggle: () => void;
}

type IModalProps = {
  title: string;
  onSubmit: (form: { description: string; value: string; } ) => void;
}

const Modal = forwardRef(function ModalForward({ title, onSubmit }: IModalProps, ref: Ref<IModalRef>) {
  const [toggle, setToggle] = useState(false)
  const [form, setForm] = useState({ 
    description: '',
    value: ''
  })

  function handleToggle () {
    setToggle(curr => !curr)
  }

  function handleSubmit () {
    onSubmit && onSubmit(form)
    if (validation) handleToggle()
  }

  const validation = form.description !== '' && form.value !== '';

  useImperativeHandle(ref, () => ({
    stateModal: toggle,
    onToggle: handleToggle,
  }), [toggle]

)

  if (!toggle) return null;

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
          onChange={(value) => setForm({ ...form, description: value})} 
        />
        <Text type={'headline-1'}>Valor mensal (R$)</Text>
        <Input 
          type="currency" 
          placeholder="R$" 
          onChange={(value) => setForm({ ...form, value})} 
        />        
        <S.ButtonContent>
          <Button variant='cancel' onClick={handleToggle}>
            Cancelar
          </Button>
          <Button variant={'default'} onClick={handleSubmit}>
            Adicionar
          </Button>
        </S.ButtonContent>
      </S.ModalContainer>
      </S.ModalOverlay>
  )
})

export default Modal;
