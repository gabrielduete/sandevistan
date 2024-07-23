import styled from 'styled-components'
import AnimationHoverLine from '~/src/styles/AnimationHoverLine'

export const Wrapper = styled.section`
  background: linear-gradient(90deg, var(--green-dark) 0%, var(--green) 100%);
  color: var(--white);
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xmedium);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xmedium);
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 100;
  font-size: var(--font-xlarge);
  writing-mode: vertical-lr;

  @media (max-width: 600px) {
    font-size: var(--font-large);
  }
`

export const Link = styled.a`
  cursor: pointer;
  font-size: var(--font-medium);
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;

  ${AnimationHoverLine}
`
