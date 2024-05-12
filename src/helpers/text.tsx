const Text = ({ title }) => {
  if (!title) {
    return null
  }

  return title?.map(value => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value
    return (
      <span key={value}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
}

export default Text
