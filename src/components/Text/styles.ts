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
