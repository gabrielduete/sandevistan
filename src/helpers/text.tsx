type TextProps = {
  title: [
    {
      link: string
    }
  ]
}

const Text = ({ title }: TextProps) => {
  if (!title) {
    return null
  }

  return title?.map(value => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value

    console.log(value?.annotations)

    return (
      <span key={value}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
}

export default Text
