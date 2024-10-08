import styled from "styled-components";


export const FinanceComponent= styled.div`
  background-color: ${({theme, color}) =>theme.COLORS[color]}; 
  padding: 1rem; 
  border-radius: 0.625rem; 
  display: flex; 
  width: 100%;
  justify-content: space-between;
  align-items: center;

`
export const Content = styled.div`
    display: flex;
    align-items: center;

`
export const Button = styled.div`
  cursor: pointer;

`