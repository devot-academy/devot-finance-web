'use client';
import styled from 'styled-components';
import React from 'react';
import Card from '../../components/molecules/card'
import List from '../../components/molecules/objectList';


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
  display: flex;
  justify-content: center;
`;

  

export default function Test() {
  return (
    <MainContainer>
      <LeftContainer>
        <Card title="Entradas" value="R$1.700,00" color="GREEN"/>
        <List title="Salário" value="R$1.200,00"  />
        <List title="Vale-alimentação" value="+R$500,00" />
        <List title='Saldo' value="R$1.100,00"/>
      </LeftContainer>
      <RightContainer>
        <Card title="Despesas Essencial" value="R$150,00" color='ROSELLA'/>
        <List title="Luz" value="-R$100,00" />
        <List title="Água" value="-R$50,00" />
        <Card title='Despesas Não Essencial' value="R$400,00"  color='FANDANGO'/>
        <List title="Lazer" value="-R$400,00"/>
        <List title='Canais de Stremens' value="-R$50,00"/>
        <Card title='Total de Despesas' value="R$600,00" color='ROSELLA'/>
        </RightContainer>
        <BottomCardContainer>
          <Card title="Reserva de Emergencia Ideal" value="R$7.200,00" color="PRIMARY"/>
        </BottomCardContainer>
    </MainContainer>
  );
}
