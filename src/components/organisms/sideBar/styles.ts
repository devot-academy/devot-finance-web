import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 2rem;
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`

export const NavMenu = styled.div`
  margin-top: -55rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_HOVER};
    border-radius: 0.25rem;
  }
`

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const IconTextContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`