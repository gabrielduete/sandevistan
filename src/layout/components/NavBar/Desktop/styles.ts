import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SvgIconProps } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '~/src/enums/breakpoints'

const createIconStyles = (Icon: React.ComponentType<SvgIconProps>) => styled(
  Icon
)`
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
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 50px;
  display: ${({ showNavBar }) => (showNavBar ? 'flex' : 'none')};
  flex-direction: column;
  width: 280px;
  z-index: 100;

  @media (max-width: ${breakpoints.Desktop}) {
    display: none;
  }
`

export const WrapperColapsed = styled.nav<{ showNavBar: boolean }>`
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 50px;
  display: ${({ showNavBar }) => (showNavBar ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  padding: calc(var(--spacing-basic-small) - 2px);
  background-color: var(--green);
  border: 1px solid var(--green-white);
  z-index: 100;

  @media (max-width: ${breakpoints.Desktop}) {
    display: none;
  }
`

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-basic-small);
  overflow-y: auto;
  flex: 1;
  min-height: 0;

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
  font-size: var(--font-small);
  padding-left: var(--spacing-basic);
`

export const RollbackContainer = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;
  color: var(--green-white);
  background-color: var(--green);
  border: 1px solid var(--green-white);

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  flex-shrink: 0;
`

export const BackIcon = createIconStyles(ArrowBackIcon)

export const GoIcon = createIconStyles(ArrowForwardIcon)
