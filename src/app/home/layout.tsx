'use client'

import { useRef } from 'react';
import SideBar from "../../components/organisms/sideBar";
import { styled } from "styled-components";
import Modal, { IModalRef } from '../../components/organisms/modal';

const Container = styled.div`
width: 100dvw;
height: 100dvh;
display: flex;
justify-content: center;
align-items: center; 
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const modalNovaEntradaRef = useRef<IModalRef>();
  const modalDispesaEssencialRef = useRef<IModalRef>();
  const modalDispesaNaoEssencialRef = useRef<IModalRef>();

  return <Container>
          <SideBar
            userName="Álefe Cruz"
            onLogout={() => {}}
            menuOptions={[ 
              {
                name: 'Nova entrada',
                onClick: () => {
                  modalNovaEntradaRef?.current?.onToggle()
                }
              },
              {
                name: 'Nova despesa essencial',
                onClick: () => {
                  modalDispesaEssencialRef?.current?.onToggle()
                }
              },
              {
                name: 'Nova despesa não essencial',
                onClick: () => {
                  modalDispesaNaoEssencialRef?.current?.onToggle
                }
              }
            ]}
          />
         {children}
         <Modal ref={modalNovaEntradaRef} title='Nova entrada' onSubmit={(form) => {  console.log("Nova Entrada: ", form)}} />
         <Modal ref={modalDispesaEssencialRef} title='Nova Dispesa Essencial' onSubmit={(form) => {  console.log("Nova Dispesa Essencial: ", form)}} />
         <Modal ref={modalDispesaNaoEssencialRef} title='Nova Dispesa Não Essencial' onSubmit={(form) => {  console.log("'Nova Dispesa Não Essencial: ", form)}} />
  </Container>;
}
 