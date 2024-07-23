import styled, { css } from 'styled-components'
import { IText } from './index'

type TextType = 'headline-1' | 'headline-2' | 'subtitle-1' | 'body-1'

interface TypeMapper {
  [key: string]: {
    as: keyof JSX.IntrinsicElements
    textFormat: ReturnType<typeof css>
  }
}

export const typeMapper: TypeMapper = {
  'headline-1': {
    as: 'h1',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.HEADING};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
      font-size: 32px;
      line-height: 80px;
      letter-spacing: -1.5px;
      text-align: left;
    `
  },
  'headline-2': {
    as: 'h2',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
      font-size: 40px;
      line-height: 80px;
      letter-spacing: -1.5px;
      text-align: left;
    `
  },
  'subtitle-1': {
    as: 'p',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.MEDIUM};
      font-size: 16px;
      line-height: 18.75px;
      text-align: left;
    `
  },
  'body-1': {
    as: 'p',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.REGULAR};
      font-size: 32px;
      line-height: 80px;
      letter-spacing: -1.5px;
      text-align: left;
    `
  }
}

const getTextComponent = (type: TextType) => styled(typeMapper[type].as)<IText>`
  ${typeMapper[type].textFormat}
  color: ${({ color, theme }) =>
    color ? theme.COLORS[color] : theme.COLORS.PRIMARY};
`

export default getTextComponent
