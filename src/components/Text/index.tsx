import { RichText } from '~/src/helpers/notionConverter/notionConverter.types'

import { Formatter } from './styles'

type TextProps = {
  title: RichText[]
}

const Text = ({ title }: TextProps) => {
  if (!title) {
    return null
  }

  return (
    <>
      {title.map(value => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value

        return (
          <Formatter
            key={text.content}
            bold={bold}
            code={code}
            color={color}
            italic={italic}
            strikethrough={strikethrough}
            underline={underline}
          >
            {text.link ? (
              <a href={text.link.url}>{text.content}</a>
            ) : (
              text.content
            )}
          </Formatter>
        )
      })}
    </>
  )
}

export default Text
