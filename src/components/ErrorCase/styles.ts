import styled from 'styled-components'

export const Container = styled('div')<{ hasMargin?: boolean }>`
  display: flex;
  gap: var(--spacing-basic);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ hasMargin }) => hasMargin && '50%'};
`

export const Text = styled('p')`
  font-size: var(--font-xmedium);
  text-align: center;
`

export const RetryButton = styled('button')`
  cursor: pointer;
  color: var(--green-white);
  background: none;
  border: none;
  font-size: var(--font-xsmall);
  transition: 0.5s ease;

  &:hover {
    color: var(--white);
  }
`
