import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { SvgIconProps } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '~/src/enums/breakpoints'

type addStyleIcon = {
  Icon: React.ComponentType<SvgIconProps>
  alignSelfEnd?: boolean
}

const addStyledIcon = ({ Icon, alignSelfEnd }: addStyleIcon) => styled(Icon)`
  align-self: ${alignSelfEnd && 'flex-end'};
  color: var(--green-white);
  cursor: pointer;
  transition: 0.1s;

  &:active {
    color: var(--white);
  }
`

export const Container = styled.nav`
  @media (min-width: ${breakpoints.Desktop}) {
    display: none;
  }
`

export const IconOpen = addStyledIcon({ Icon: MenuIcon })

export const IconClose = styled(addStyledIcon({ Icon: CloseIcon, alignSelfEnd: true }))`
  margin-right: var(--spacing-basic);
  margin-top: var(--spacing-basic);
`

export const WrapperContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 93vh;
  background-color: var(--green-dark);
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-basic);
`

export const Link = styled.a`
  font-size: var(--font-medium);
  padding-left: var(--spacing-basic);
  cursor: pointer;
`
