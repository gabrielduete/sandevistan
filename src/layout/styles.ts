import styled from 'styled-components'

import { breakpoints } from './../utils/breakpoints'

export const Container = styled.main`
  color: var(--white);
  background-color: var(--green-dark);
`

export const WrapperContent = styled.main`
  width: 100%;
  max-width: ${breakpoints.Desktop};
  margin: 0 auto;
  word-wrap: break-word;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.Tablet}) {
    padding: 0 var(--spacing-basic);
  }
`
