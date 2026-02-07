import { CircularProgress } from '@mui/material'
import styled from 'styled-components'

import { breakpoints } from '../enums/breakpoints'

export const Container = styled.main`
  color: var(--white);
`

export const WrapperContent = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 0;
  margin-top: 70px;

  @media (max-width: ${breakpoints.Tablet}) {
    padding: 0 var(--spacing-basic);
  }
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${breakpoints.Desktop};
  word-wrap: break-word;
  margin: 0 auto;
  padding: 0 var(--spacing-basic);
  min-width: 0;

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
