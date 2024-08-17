'use client';
import styled from 'styled-components';
import React from 'react';
import Card from '../../components/molecules/card';
import { ListComponent } from '../../components/molecules/objectList/styles';
import Icon from '../../components/atoms/icon/index';
import List from '../../components/molecules/objectList';
import { iconMapper } from '../../components/atoms/icon/mapper';


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


  

export default function Test() {
  return (
    <MainContainer>
      <LeftContainer>
        <Card title="Entradas" value="R$1.700,00" color="GREEN"/>
        <List title="Salário" value="R$1.200,00" />
        <List title="Vale-alimentação" value="+R$500,00" />
        <List title='Saldo' value="R$1.100,00"/>
      </LeftContainer>
      <RightContainer>
        <Card title="Despesas Essencial" value="R$150,00" />
        <List title="Luz" value="-R$100,00" />
        <List title="Água" value="-R$50,00" />
        <Card title='Despesas Não Essencial' value="R$400,00" />
        <List title="Lazer" value="-R$400,00"/>
        <List title='Canais de Stremens' value="-R$50,00"/>
        <List title='Total de Despesas' value="R$600,00"/>
        </RightContainer>
    </MainContainer>
  );
}
