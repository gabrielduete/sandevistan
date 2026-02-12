import { CircularProgress } from '@mui/material'
import styled from 'styled-components'

import { breakpoints } from '../enums/breakpoints'

export const Container = styled('main')`
  color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const WrapperContent = styled('section')`
  width: calc(100% - 100px);
  margin-left: 280px;
  display: flex;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease, margin-left 0.3s ease;

  @media (max-width: ${breakpoints.Desktop}) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: ${breakpoints.Tablet}) {
    padding: 0 var(--spacing-basic);
  }
`

export const Content = styled('div')`
  flex: 1;
  width: 100%;
  max-width: ${breakpoints.Desktop};
  word-wrap: break-word;
  margin: 0 auto;
  padding: 0 var(--spacing-basic);
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.Tablet}) {
    padding: 0 var(--spacing-basic);
  }
`

export const Loading = styled(CircularProgress)`
  color: var(--white);
  position: absolute;
  top: 45%;
  left: 50%;
`
