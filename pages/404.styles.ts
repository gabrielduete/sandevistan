import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: var(--spacing-basic);
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  color: var(--green-white);
  margin: 0;
  line-height: 1;
`

export const Message = styled.p`
  font-size: var(--font-medium);
  color: var(--green-white);
  margin: 0;
`

export const Button = styled.button`
  background-color: transparent;
  color: var(--green-white);
  border: 1px solid var(--green-white);
  padding: var(--spacing-basic-small) var(--spacing-basic);
  font-size: var(--font-small);
  cursor: pointer;
  transition: 0.3s;
  margin-top: var(--spacing-basic);

  &:hover {
    background-color: var(--green);
    color: var(--white);
    border-color: var(--green);
  }
`

