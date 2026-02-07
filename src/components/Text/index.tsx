import { RichText } from '~/src/helpers/notionConverter/notionConverter.types'

import * as S from './styles'

type TextProps = {
  title: RichText[]
  isHeading?: boolean
}

const Text = ({ title, isHeading }: TextProps) => {
  if (!title) {
    return null
  }

  const renderContent = (text: RichText['text']) => {
    if (isHeading) {
      return (
        <S.WrapperHeading id={text.content} onClick={
          (e) => {
            e.preventDefault()
            window.location.hash = text.content
          }
        }>
          <S.Hashtag>#</S.Hashtag>
          {text.content}
        </S.WrapperHeading>
      )
    }

    if (text.link) {
      return <a href={text.link.url}>{text.content}</a>
    }

    return text.content
  }


  return (
    <>
      {title.map(value => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value

        return (
          <S.Formatter
            key={text.content}
            bold={bold}
            code={code}
            color={color}
            italic={italic}
            strikethrough={strikethrough}
            underline={underline}
          >
            {renderContent(text)}
          </S.Formatter>
        )
      })}
    </>
  )
}

export default Text
