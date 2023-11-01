import styled from 'styled-components'

import AnimationHoverLine from '../../styles/AnimationHoverLine'

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-basic);
  width: 100%;
  height: 60px;
  background-color: var(--green);
  padding-left: var(--spacing-basic);

  position: fixed;
  top: 0;
  left: 0;
`

export const Link = styled.a<{ isPath: boolean }>`
  color: ${({ isPath }) =>
    isPath ? 'color: var(--white)' : 'var(--green-white)'};
  cursor: pointer;
  text-decoration: none;
  ${AnimationHoverLine}

  &:hover {
    color: var(--white);
  }
`
