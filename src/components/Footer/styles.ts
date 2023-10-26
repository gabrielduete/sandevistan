import styled from 'styled-components'

import AnimationHoverLine from '../../styles/AnimationHoverLine'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-basic);
  width: 100%;
  max-height: auto;
  min-height: 50px;
  background-color: var(--green);

  position: fixed;
  left: 0;
  bottom: 0;
`

export const Link = styled.a`
  color: var(--green-white);
  text-decoration: none;
  ${AnimationHoverLine}

  &:hover {
    color: var(--white);
  }
`
