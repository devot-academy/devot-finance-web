import styled, { css } from 'styled-components'
import { IButtonProps } from './index'

export const ButtonComponent = styled.button<IButtonProps>`
  font-family: ${props => props.theme.FONTS.BODY};
  font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
  font-size: 1.5rem;
  line-height: 1.25rem;
  letter-spacing: 0.00625rem;
  text-align: center;
  background-color: ${props => props.theme.COLORS.PRIMARY};
  color: ${props => props.theme.COLORS.BACKGROUND};
  width: 16.875rem;
  height: 3.966875rem;
  border-radius: 0.625rem;
  opacity: 1;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.variant === 'cancel' &&
    css`
      background-color: ${props.theme.COLORS.CANCEL};
      color: ${props.theme.COLORS.BACKGROUND};
    `}

  ${props =>
    props.variant === 'danger' &&
    css`
      background-color: ${props.theme.COLORS.DANGER};
      color: ${props.theme.COLORS.BACKGROUND};
    `}
`
