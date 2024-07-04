import { useRouter } from 'next/router'
import { useState } from 'react'
import Equalizer from '~/src/components/Equalizer'
import { usePagesStoraged } from '~/src/contexts/ContextPages'
import { SoundClickButton } from '~/src/utils/sounds'

import { NavBarProps } from '../Navbar.types'
import { titleWithHyphens } from '../helpers/formateTitle'
import { getPaths } from '../helpers/getPaths'
import * as S from './styles'

const DesktopNavBar = ({ pages }: NavBarProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const { setIdPage } = usePagesStoraged()

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
    <>
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
    </>
  )
}

export default DesktopNavBar
