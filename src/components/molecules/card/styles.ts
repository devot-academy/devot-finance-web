import styled from 'styled-components';


export const CardComponent = styled.div`
  background-color: ${({theme, color}) =>theme.COLORS[color]}; 
  padding: 1rem; 
  border-radius: 0.625rem; 
  display: flex; 
  width: 100%;
  justify-content: space-between;


`;


