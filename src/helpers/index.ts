import { blocks } from '../mocks/blockJavascriptMock'

type ArrayExtratecd = {
  type: string
  text: string
}

const extractTextAndType = contents => {
  const extractedTexts: ArrayExtratecd[] = []

  contents.forEach(content => {
    let type = ''
    let text = ''

    switch (content.type) {
      case 'heading_1':
        type = 'h1'
        text = content.heading_1.rich_text[0].plain_text
        break
      case 'heading_3':
        type = 'h3'
        text = content.heading_3.rich_text[0].plain_text
        break
      case 'bulleted_list_item':
        type = 'li'
        text = content.bulleted_list_item.rich_text[0].plain_text
        break
      case 'paragraph':
        type = 'p'
        text = content.paragraph.rich_text[0].plain_text
        break
      default:
        break
    }

    if (type && text) {
      extractedTexts.push({ type, text })
    }
  })

  return extractedTexts
}

export const extractedTexts = extractTextAndType(blocks)
