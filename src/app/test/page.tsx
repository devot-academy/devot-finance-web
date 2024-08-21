'use client';
import styled from 'styled-components';
import React from 'react';
import Card from '../../components/molecules/card';
import List from '../../components/molecules/objectList';

const handleDelete = () => {
  console.log('Item deletado!');
};


const MainContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomCardContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0; 
  display: flex;
  justify-content: center;
  padding-bottom: 40px; 
`;

function onClick(){
  console.log('Clicou!')
}

export default function test() {
  return (
    <MainContainer>
      <LeftContainer>
        <Card title="Entradas" value="R$1.700,00" color="GREEN" />
        <List title="Salário" value="R$1.200,00"  onClick={onClick}/>
        <List title="Vale-alimentação" value="+R$500,00" onClick={onClick} />
        <List title='Saldo' value="R$1.100,00"  onClick={onClick}/>
      </LeftContainer>
      <RightContainer>
        <Card title="Despesas Essencial" value="R$150,00" color='ROSELLA' />
        <List title="Luz" value="-R$100,00" onClick={onClick} />
        <List title="Água" value="-R$50,00" onClick={onClick}/>
        <Card title='Despesas Não Essencial' value="R$400,00" color='FANDANGO' />
        <List title="Lazer" value="-R$400,00" onClick={onClick}/>
        <List title='Canais de Stremens' value="-R$50,00"onClick={onClick} />
        <Card title='Total de Despesas' value="R$600,00" color='ROSELLA' />
      </RightContainer>
      <BottomCardContainer>
        <Card title="Reserva de Emergencia Ideal" value="R$7.200,00" color="PRIMARY" />
      </BottomCardContainer>
    </MainContainer>
  );
}
