import styled from 'styled-components'

export const InputField = styled.input`
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.FONTS.BODY};
  font-size: 1.7rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.CANCEL};
  }
`
