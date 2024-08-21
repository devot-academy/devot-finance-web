import styled from 'styled-components'
import Button from '../../molecules/button'
import Input from '../../atoms/input'

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

export const ModalContainer = styled.div`
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
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.BODY};
  font-weight: ${({ theme }) => theme.FONTS.FONT_WEIGHTS.BOLD};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
  margin-bottom: 2rem;
`

export const InputField = styled(Input)`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 0.25rem;
  flex-grow: 1;
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const CancelButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.CANCEL};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0.75rem 1rem;
`

export const ConfirmButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0.75rem 1rem;
`
