import styled, { css } from 'styled-components'
import { StylesProps } from '~/src/helpers/notionConverter/notionConverter.types'

export const Formatter = styled.span<StylesProps>`
  font-weight: ${({ bold }) => bold && 'bold'};
  font-style: ${({ italic }) => italic && 'italic'};
  text-decoration: ${({ underline }) => underline && 'underline'};
  text-decoration: ${({ strikethrough }) => strikethrough && 'line-through'};
  color: ${({ color }) => color};
  ${({ code }) =>
    code &&
    css`
      font-family: monospace;
      background-color: var(--black);
      padding: 0 var(--spacing-basic-small);
      border-radius: var(--border-radius-small);
    `}  
`

export const Hashtag = styled.p`
  color: var(--green-white);
  cursor: pointer;
  text-decoration: none;
  font-size: var(--font-xxxmedium);
`

export const WrapperHeading = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-basic-small);
`