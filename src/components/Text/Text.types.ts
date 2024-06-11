export type StylesProps = {
  bold?: boolean
  code?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  color?: string
}

export type TextProps = {
  title: [
    {
      link: string
      annotations: StylesProps
      text: {
        content: string
        link: {
          url: string
        }
      }
    }
  ]
}
