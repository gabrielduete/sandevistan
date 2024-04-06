import { useState } from 'react'
import Equalizer from '~/src/components/Equalizer'
import { SoundClickButton } from '~/src/utils/Sounds'

import { navBarMock } from '../Navbar.mock'
import * as S from './styles'

const DesktopNavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const closeNavBar = () => {
    SoundClickButton()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.Wrapper showNavBar={isOpen}>
        <S.NavBar>
          {navBarMock.map(({ name }, idx) => (
            <S.Item key={idx}>
              <S.Link>{name}</S.Link>
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
