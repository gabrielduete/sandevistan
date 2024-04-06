import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'

export const Container = styled.nav`
  align-items: center;
  display: flex;
`

export const Link = styled.a<{ isActualPath: boolean }>`
  cursor: pointer;
  color: ${({ isActualPath }) => isActualPath && 'var(--white)'};
`

export const Simbol = styled.p`
  color: var(--green-white);
  margin: 0 var(--spacing-basic-small);
`

export const Icon = styled(HomeIcon)`
  color: var(--green-white);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--white);
  }
`
