import { Block } from '~/src/helpers/notionConverter/notionConverter.types'

export const pagesMock: Block[] = [
  {
    id: '1',
    type: 'child_page' as const,
    child_page: {
      title: 'Git e Versionamento',
    },
  },
  {
    id: '2',
    type: 'child_page' as const,
    child_page: {
      title: 'My list git commands',
    },
  },
]
