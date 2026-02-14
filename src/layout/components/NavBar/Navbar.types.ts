import { Block } from '~/src/helpers/notionConverter/notionConverter.types'

export type NavBarProps = {
  pages: Block[]
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  'data-testid'?: string
}
