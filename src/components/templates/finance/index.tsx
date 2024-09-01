import React from "react";
import List from "../../molecules/objectList";
import Card from "../../molecules/card";
import { MainContainer, LeftContainer, RightContainer, BalanceContainer, Title, ContainerWrapper, NonEssentialExpenses, TotalExpenses, EmergencyReserve } from './styles';
import Text from "../../atoms/text";

const handleDelete = () => {
    console.log('Item deletado!');
};

function onClick() {
    console.log('Clicou!')
}

function parseCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    const formattedValue = formatter.format(Math.abs(value));
    const sign = value >= 0 ? '+' : '-';
    return `${sign} ${formattedValue}`;
}

export default function FinanceTemplate() {
    return (
        <MainContainer>
            <Title>
                <Text type="headline-2" color="PRIMARY">Finanças</Text>
            </Title>
            <ContainerWrapper>
                <LeftContainer>
                    <Card title="Entradas" value={parseCurrency(1700.00)} color="GREEN" />
                    <List title="Salário" value={parseCurrency(1200.00)} onClick={onClick} />
                    <List title="Vale-alimentação" value={parseCurrency(500.00)} onClick={onClick} />
                    <List title="Outros" value={parseCurrency(0.00)} onClick={onClick} />
                    <BalanceContainer>
                         <Card title="Saldo" value={parseCurrency(1000.00)} color="GREEN" />
                    </BalanceContainer>
                </LeftContainer>
                <RightContainer>
                    <Card title="Despesas Essencial" value={parseCurrency(150.00)} color='ROSELLA' />
                    <List title="Luz" value={parseCurrency(-100.00)} onClick={onClick} />
                    <List title="Água" value={parseCurrency(-50.00)} onClick={onClick} />
                    <List title="Gás" value={parseCurrency(-50.00)} onClick={onClick} />
                    <NonEssentialExpenses>
                    <Card title='Despesas Não Essencial' value={parseCurrency(400.00)} color='FANDANGO' />
                    <List title="Lazer" value={parseCurrency(-400.00)} onClick={onClick} />
                    <List title='Canais de Streaming' value={parseCurrency(-50.00)} onClick={onClick} />
                    </NonEssentialExpenses>
                   <TotalExpenses> 
                    <Card title='Total de Despesas' value={parseCurrency(600.00)} color='ROSELLA' />
                    </TotalExpenses> 
                </RightContainer>
            </ContainerWrapper>
            <EmergencyReserve>
              <Card title="Reversa emergencia ideal" value={parseCurrency(7200.00)} color="PRIMARY" />
            </EmergencyReserve>
        </MainContainer>
    )
}

 /* export
<RightContainer>
<Card title="Despesas Essencial" value={parseCurrency(150.00)} color='ROSELLA' />
<List title="Luz" value={parseCurrency(-100.00)} onClick={onClick} />
<List title="Água" value={parseCurrency(-50.00)} onClick={onClick} />
<NonEssentialExpenses>
<Card title='Despesas Não Essencial' value={parseCurrency(400.00)} color='FANDANGO' />
<List title="Lazer" value={parseCurrency(-400.00)} onClick={onClick} />
<List title='Canais de Streaming' value={parseCurrency(-50.00)} onClick={onClick} />
</NonEssentialExpenses>
<TotalExpenses> 
<Card title='Total de Despesas' value={parseCurrency(600.00)} color='ROSELLA' />
</TotalExpenses> 
</RightContainer>
</ContainerWrapper>
<BalanceContainer>
<Card title="Saldo" value={parseCurrency(1000.00)} color="GREEN" />
</BalanceContainer>
<EmergencyReserve>
<Card title="Reversa emergencia ideal" value={parseCurrency(7200.00)} color="PRIMARY" />
</EmergencyReserve>

/*export  default function financeTemplate(){
    return (
    <MainContainer>
      <LeftContainer>
        <Card title="Entradas" value={parseCurrency(1700.00)} color="GREEN"/>
        <List title="Salário" value={parseCurrency(1200.00)} onClick={onClick}/>
        <List title="Vale-alimentação" value={parseCurrency(500.00)} onClick={onClick}/>
        <BalanceContainer>
        <Card title="Saldo" value={parseCurrency(1000.00)} color="GREEN"/>
        </BalanceContainer>
      </LeftContainer>
        <RightContainer>
        <Card title="Despesas Essencial" value={parseCurrency(150.00)} color='ROSELLA' />
        <List title="Luz" value={parseCurrency(-100.00)} onClick={onClick} />
        <List title="Água" value={parseCurrency(-50.00)} onClick={onClick}/>
        <Card title='Despesas Não Essencial' value={parseCurrency(400.00 )}color='FANDANGO' />
        <List title="Lazer" value={parseCurrency(-400.00)}onClick={onClick}/>
        <List title='Canais de Stremens' value={parseCurrency(-50.00) }onClick={onClick} />
        <Card title='Total de Despesas' value={parseCurrency(600.00)} color='ROSELLA' />
      </RightContainer>
      <BottomCardContainer>
        <Card title="Reserva de Emergencia Ideal" value={parseCurrency(7200.00 )}color="PRIMARY" />
      </BottomCardContainer>
    </MainContainer>

    );

    
}*/


