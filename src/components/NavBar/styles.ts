import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import styled from 'styled-components'

export const Wrapper = styled.nav<{ showNavBar: boolean }>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  margin-top: 70px;
  overflow-y: auto;

  display: ${({ showNavBar }) => !showNavBar && 'none'};
`

export const NavBar = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-basic-small);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-button {
    background-color: var(--black);
  }

  ::-webkit-scrollbar-track-piece {
    background-color: var(--black);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  transition: 0.3s;
  padding: var(--spacing-basic-small) 0;
  cursor: pointer;

  &:hover {
    background: var(--green);

    a {
      color: var(--white);
    }
  }
`

export const Link = styled.a`
  font-size: 16px;
  padding-left: var(--spacing-basic);
`

export const RollbackContainer = styled.div`
  width: 280px;
  height: 60px;
  color: var(--green-white);
  background-color: var(--green);
  border: 1px solid var(--green-white);

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`

export const BackIcon = styled(ArrowBackIcon)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--white);
  }
`
