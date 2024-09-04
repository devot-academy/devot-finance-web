import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 2rem; 
  width: 100%;
  font-size: 48px;
  line-height: 80px;
  padding-left: 20px;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 2rem; 
  padding: 0 2rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; 
  
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%; 

`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; 
  margin-top: auto; 
`;

export const NonEssentialExpenses = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  align-items: flex-end;
  margin-top: 4rem;
`;

export const TotalExpenses = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  margin-top: 1rem; 
  align-items: flex-end;
  margin-top: 2rem;
`;

export const EmergencyReserve = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; 
  margin-top: 2rem; 
  padding-left: 2rem; 
  padding-right: 2rem;
  margin-top: 4rem;
`;
