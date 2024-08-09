import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const InputField = styled.input`
  width: 35.375rem;
  height: 4.5625rem;
  border-radius: 0.625rem;
  border: 0.125rem solid ${({ theme }) => theme.COLORS.PRIMARY};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.TEXT};
  opacity: 1;

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    outline: none;
  }
`
