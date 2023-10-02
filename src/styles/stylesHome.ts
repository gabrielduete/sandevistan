import styled from 'styled-components'

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

export const WrapperEqualizer = styled.footer`
  position: absolute;
  right: var(--spacing-medium);
  bottom: var(--spacing-medium);
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
  font-size: var(--font-large);
  writing-mode: vertical-lr;
`

export const Link = styled.a`
  cursor: pointer;
  font-size: var(--font-medium);
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--white);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    opacity: 1;
  }
`
