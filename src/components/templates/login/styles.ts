import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`

export const FormContent = styled.div`
  border-radius: 1.875rem; /* 30px */
  padding: 3.5rem 13.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FinanceLogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  margin-bottom: 5rem;
  width: 100%;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`

export const ButtonContent = styled.div`
  margin: 5rem auto;
`

export const CreateAccountContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const LogoContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.4375rem 1.875rem; /* 0.7rem 3rem */
  display: flex;
`

export const LogoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InputContent = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`
