import styled from 'styled-components'
import { IButtonProps } from './index'

export const ButtonComponent = styled.button<IButtonProps>`
  font-family: ${props => props.theme.FONTS.BODY};
  font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  background-color: ${props => props.theme.COLORS.PRIMARY};
  color: ${props => props.theme.COLORS.BACKGROUND};
  width: 270px;
  height: 63.47px;
  border-radius: 10px;
  opacity: 1;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
