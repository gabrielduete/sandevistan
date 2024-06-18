import { RichText } from '~/src/helpers/notionConverter/notionConverter.types'

export type StylesProps = {
  bold?: boolean
  code?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  color?: string
}

export type TextProps = {
  title: RichText[]
}
