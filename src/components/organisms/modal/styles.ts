import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const ModalContainer = styled.div<{
  variant?: 'default' | 'delete' | 'logout'
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 43.688rem;
  height: 42.75rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ variant, theme }) =>
    variant === 'delete' &&
    `
    height: 18rem;
    width: 43.688rem;
    h2 {
      color: ${theme.COLORS.DANGER};
    }
  `}
  ${({ variant, theme }) =>
    variant === 'logout' &&
    `
    height: 18rem;
    width: 43.688rem;
    h2 {
      color: ${theme.COLORS.PRIMARY};
    }
  `}
`

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.BODY};
  font-weight: ${({ theme }) => theme.FONTS.FONT_WEIGHTS.BOLD};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
`
