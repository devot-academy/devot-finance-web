import React from "react";
import FinanceOverview from "../../molecules/financeOverview";
import Card from "../../molecules/card";
import { MainContainer, LeftContainer, RightContainer, BalanceContainer, Title, ContainerWrapper, NonEssentialExpenses, TotalExpenses, EmergencyReserve } from './styles';
import Text from "../../atoms/text";

const handleDelete = () => {
    console.log('Item deletado!');
};

function onClick() {
    console.log('Clicou!')
}


export default function FinanceTemplate() {
    return (
        <MainContainer>
            <Title>
                <Text type="headline-2" color="PRIMARY">Finanças</Text>
            </Title>
            <ContainerWrapper>
                <LeftContainer>
                    <Card title="Entradas" value={1700.00} color="GREEN" />
                    <FinanceOverview title="Salário" value={1200.00} onClick={onClick} textColor="GREEN" />
                    <FinanceOverview title="Vale-alimentação" value={500.00} onClick={onClick} textColor="GREEN" />
                    <FinanceOverview title="Outros" value={0.00} onClick={onClick} textColor="GREEN" />
                    <BalanceContainer>
                        <Card title="Saldo" value={1000.00} color="GREEN" />
                    </BalanceContainer>
                </LeftContainer>
                <RightContainer>
                    <Card title="Despesas Essencial" value={150.00} color='ROSELLA' />
                    <FinanceOverview title="Luz" value={-100.00} onClick={onClick} textColor="ROSELLA" />
                    <FinanceOverview title="Água" value={-50.00} onClick={onClick} textColor="ROSELLA" />
                    <NonEssentialExpenses>
                        <Card title='Despesas Não Essencial' value={(400.00)} color='FANDANGO' />
                        <FinanceOverview title="Lazer" value={-400.00} onClick={onClick} textColor="FANDANGO" />
                        <FinanceOverview title='Canais de Streaming' value={-50.00} onClick={onClick} textColor="FANDANGO" />
                    </NonEssentialExpenses>
                    <TotalExpenses>
                        <Card title='Total de Despesas' value={600.00} color='ROSELLA' />
                    </TotalExpenses>
                </RightContainer>
            </ContainerWrapper>
            <EmergencyReserve>
                <Card title="Reversa emergencia ideal" value={7200.00} color="PRIMARY" />
            </EmergencyReserve>
        </MainContainer>
    )
}


