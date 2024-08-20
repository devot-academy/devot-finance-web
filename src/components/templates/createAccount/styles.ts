import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`

export const FormContent = styled.div`
  border-radius: 2rem;
  padding: 3rem 8rem;
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
  margin-bottom: 4rem;
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
  margin: 4rem auto;
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
  margin: 1rem 2rem;
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
