import styled from 'styled-components'
import Text, { ITextProps } from '../../atoms/text'

export const LinkComponent = styled(Text)<ITextProps>`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  &:hover {
    text-decoration: underline;
  }
`
