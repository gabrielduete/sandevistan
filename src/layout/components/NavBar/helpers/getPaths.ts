import {
  Block,
  ChildPageBlock,
} from '~/src/helpers/notionConverter/notionConverter.types'

type getPathsParams = {
  pages: Block[]
}

export const getPaths = ({ pages }: getPathsParams) => {
  const childPageBlocks = pages?.filter(
    (block): block is ChildPageBlock => block.type === 'child_page'
  )

  const filtredPaths = childPageBlocks
    ?.map(({ id, child_page }) => {
      const title = child_page?.title

      // @NOTE: Disable eslint to use assertion, because typescript is not recognizing that title is not undefined
      // eslint-disable-next-line
      return { id, title: title! }
    })
    .filter(page => page.title !== undefined)

  return filtredPaths
}
