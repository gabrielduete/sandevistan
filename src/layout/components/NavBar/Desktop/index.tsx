import { useRouter } from 'next/router'
import { useState } from 'react'
import Equalizer from '~/src/components/Equalizer'
import {
  PagesStoregedProvider,
  usePagesStoraged,
} from '~/src/contexts/ContextPages'
import { ChildPageBlock } from '~/src/helpers/notionConverter/notionConverter.types'
import { SoundClickButton } from '~/src/utils/sounds'

import * as S from './styles'

const DesktopNavBar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const { setIdPage, pages } = usePagesStoraged()

  const closeNavBar = () => {
    SoundClickButton()
    setIsOpen(!isOpen)
  }

  const goToContent = (id: string, title: string) => {
    const titleWithHyphens = title.replaceAll(' ', '-')

    setIdPage(id)

    router.push(titleWithHyphens)
  }

  const childPageBlocks = pages?.filter(
    (block): block is ChildPageBlock => block.type === 'child_page'
  )

  const paths = childPageBlocks
    ?.map(({ id, child_page }) => {
      const title = child_page?.title

      // @NOTE: Disable eslint to use assertion, because typescript is not recognizing that title is not undefined
      // eslint-disable-next-line
      return { id, title: title! }
    })
    .filter(page => page.title !== undefined)

  return (
    <PagesStoregedProvider>
      <S.Wrapper showNavBar={isOpen}>
        <S.NavBar>
          {paths?.map(({ title, id }) => (
            <S.Item key={title} onClick={() => goToContent(id, title)}>
              <S.Link>{title}</S.Link>
            </S.Item>
          ))}
        </S.NavBar>
        <S.RollbackContainer>
          <Equalizer />
          <S.BackIcon onClick={closeNavBar} />
          <div />
        </S.RollbackContainer>
      </S.Wrapper>
      <S.WrapperColapsed showNavBar={!isOpen}>
        <S.GoIcon onClick={closeNavBar} />
      </S.WrapperColapsed>
    </PagesStoregedProvider>
  )
}

export default DesktopNavBar
