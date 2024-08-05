import styled, { css } from 'styled-components'
import { ITextProps } from './index'

export type IType = keyof typeof typeMapper
type ITextComponent = Omit<ITextProps, 'children'>

export const typeMapper = {
  'headline-1': {
    textFormat: css`
      font-family: ${props => props.theme.FONTS.HEADING};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
      font-size: 2rem;
      letter-spacing: -1.5px;
      text-align: left;
    `
  },
  'headline-2': {
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
      font-size: 2.5rem;
      letter-spacing: -1.5px;
      text-align: left;
    `
  },
  'subtitle-1': {
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.MEDIUM};
      line-height: 1.172rem;
      text-align: left;
    `
  },
  'body-1': {
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.REGULAR};
      font-size: 2rem;
      letter-spacing: -1.5px;
      text-align: left;
    `
  }
}

export const TextComponent = styled.p<ITextComponent>`
  ${({ type }) => typeMapper[type].textFormat}
  color: ${({ color, theme }) =>
    color ? theme.COLORS[color] : theme.COLORS.PRIMARY};
`
