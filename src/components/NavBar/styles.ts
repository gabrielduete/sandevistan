import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import styled from 'styled-components'

const createIconStyles = Icon => styled(Icon)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: 0.3s;
  color: var(--green-white);

  &:hover {
    color: var(--white);
  }
`

export const Wrapper = styled.nav<{ showNavBar: boolean }>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  margin-top: 70px;
  overflow-y: auto;
  display: ${({ showNavBar }) => !showNavBar && 'none'};
`

export const WrapperColapsed = styled.nav<{ showNavBar: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: auto;
  padding: calc(var(--spacing-basic-small) - 2px);
  background-color: var(--green);
  border: 1px solid var(--green-white);
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
  max-width: 280px;
  height: 60px;
  color: var(--green-white);
  background-color: var(--green);
  border: 1px solid var(--green-white);

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`

export const BackIcon = createIconStyles(ArrowBackIcon)

export const GoIcon = createIconStyles(ArrowForwardIcon)
