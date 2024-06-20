import { useRouter } from 'next/router'
import { useState } from 'react'
import Equalizer from '~/src/components/Equalizer'
import {
  PagesStoregedProvider,
  usePagesStoraged,
} from '~/src/contexts/ContextPages'
import { SoundClickButton } from '~/src/utils/sounds'

import { titleWithHyphens } from '../helpers/formateTitle'
import { getPaths } from '../helpers/getPaths'
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
    setIdPage(id)
    router.push(titleWithHyphens(title))
  }

  const paths = getPaths({ pages })

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
