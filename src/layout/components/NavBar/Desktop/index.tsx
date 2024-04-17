import { useRouter } from 'next/router'
import { useState } from 'react'
import Equalizer from '~/src/components/Equalizer'
import {
  PagesStoregedProvider,
  usePagesStoraged,
} from '~/src/contexts/ContextPages'
import usePages from '~/src/hooks/getPages'
import { SoundClickButton } from '~/src/utils/sounds'

import * as S from './styles'

const DesktopNavBar = () => {
  const router = useRouter()
  // const { pages } = usePages()
  // const { setIdPage } = usePagesStoraged()
  const [isOpen, setIsOpen] = useState(true)

  const closeNavBar = () => {
    SoundClickButton()
    setIsOpen(!isOpen)
  }

  // const goToContent = (idPage: string) => {
  //   setIdPage(idPage)
  //   router.push(`/contents/${idPage}`)
  // }

  // const paths = pages?.results
  //   ?.map(page => {
  //     const id = page.id
  //     const title = page?.child_page?.title

  //     return { id, title }
  //   })
  //   .filter(page => page.title !== undefined)

  return (
    <PagesStoregedProvider>
      <S.Wrapper showNavBar={isOpen}>
        <S.NavBar>
          {/* {paths?.map(({ title, id }) => (
            <S.Item key={title} onClick={() => goToContent(id)}>
              <S.Link>{title}</S.Link>
            </S.Item>
          ))} */}
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
