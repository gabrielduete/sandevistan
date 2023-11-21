import styled from 'styled-components'

import { breakpoints } from './../utils/breakpoints'

export const Container = styled.main`
  color: var(--white);
  background-color: var(--green-dark);
`

export const WrapperContent = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: ${breakpoints.Tablet}) {
    padding: 0 var(--spacing-basic);
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: ${breakpoints.Desktop};
  word-wrap: break-word;
  margin: 70px auto;

  @media (max-width: ${breakpoints.Tablet}) {
    padding: 0 var(--spacing-basic);
  }
`
