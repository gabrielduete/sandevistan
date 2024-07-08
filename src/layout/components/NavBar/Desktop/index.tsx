import { useRouter } from 'next/router'
import { useState } from 'react'
import Equalizer from '~/src/components/Equalizer'
import { SoundClickButton } from '~/src/utils/sounds'

import { formatedTitle } from '../../../../helpers/formateTitle'
import { getPaths } from '../../../../helpers/getPaths'
import { NavBarProps } from '../Navbar.types'
import * as S from './styles'

const DesktopNavBar = ({ pages }: NavBarProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const closeNavBar = () => {
    SoundClickButton()
    setIsOpen(!isOpen)
  }

  const paths = getPaths({ pages })

  return (
    <>
      <S.Wrapper showNavBar={isOpen}>
        <S.NavBar>
          {paths?.map(({ title }) => (
            <S.Item
              key={title}
              onClick={() => router.push(formatedTitle(title, true))}
            >
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
