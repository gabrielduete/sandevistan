type TextContent = {
  content: string
  link: {
    url: string
  } | null
}

type Annotations = {
  bold?: boolean
  code?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  color?: string
}

export type RichText = {
  text: TextContent
  annotations: Annotations
  plain_text: string
  href: string | null
}

type BlockBase = {
  id: string
  type: string
  children?: Block[]
}

type ParagraphBlock = BlockBase & {
  type: 'paragraph'
  paragraph: {
    rich_text: TextContent[]
  }
}

type Heading1Block = BlockBase & {
  type: 'heading_1'
  heading_1: {
    rich_text: TextContent[]
  }
}

type Heading2Block = BlockBase & {
  type: 'heading_2'
  heading_2: {
    rich_text: TextContent[]
  }
}

type Heading3Block = BlockBase & {
  type: 'heading_3'
  heading_3: {
    rich_text: TextContent[]
  }
}

type BulletedListBlock = ListBlock & {
  type: 'bulleted_list'
}

type NumberedListBlock = ListBlock & {
  type: 'numbered_list'
}

type ListItemBlock = BlockBase & {
  type: 'bulleted_list_item' | 'numbered_list_item'
  rich_text: TextContent[]
}

type ToDoBlock = BlockBase & {
  type: 'to_do'
  to_do: {
    rich_text: TextContent[]
    checked: boolean
  }
}

type ToggleBlock = BlockBase & {
  type: 'toggle'
  toggle: {
    rich_text: TextContent[]
  }
}

type ChildPageBlock = BlockBase & {
  type: 'child_page'
  child_page: {
    title: string
  }
}

type ImageBlock = BlockBase & {
  type: 'image'
  image: {
    type: 'external' | 'file'
    external?: { url: string }
    file?: { url: string }
    caption?: TextContent[]
  }
}

type DividerBlock = BlockBase & {
  type: 'divider'
}

type QuoteBlock = BlockBase & {
  type: 'quote'
  quote: {
    rich_text: TextContent[]
  }
}

type CodeBlock = BlockBase & {
  type: 'code'
  code: {
    rich_text: TextContent[]
  }
}

type FileBlock = BlockBase & {
  type: 'file'
  file: {
    type: 'external' | 'file'
    external?: { url: string }
    file?: { url: string }
    caption?: TextContent[]
  }
}

type BookmarkBlock = BlockBase & {
  type: 'bookmark'
  bookmark: {
    url: string
  }
}

type TableBlock = BlockBase & {
  type: 'table'
  table: {
    has_column_header: boolean
  }
}

type ColumnListBlock = BlockBase & {
  type: 'column_list'
}

type ColumnBlock = BlockBase & {
  type: 'column'
}

export type TableRowBlock = BlockBase & {
  type: 'table_row'
  table_row: {
    cells: RichText[][]
  }
}

export type ListBlock = BlockBase & {
  children: Block[]
}

export type Block =
  | ParagraphBlock
  | Heading1Block
  | Heading2Block
  | Heading3Block
  | BulletedListBlock
  | NumberedListBlock
  | ListItemBlock
  | ToDoBlock
  | ToggleBlock
  | ChildPageBlock
  | ImageBlock
  | DividerBlock
  | QuoteBlock
  | CodeBlock
  | FileBlock
  | BookmarkBlock
  | TableBlock
  | TableRowBlock
  | ColumnListBlock
  | ColumnBlock
