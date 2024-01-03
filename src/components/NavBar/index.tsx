import { useState } from 'react'

import { SoundClickButton } from '../../../src/utils/Sounds/index'
import Equalizer from '../Equalizer'
import { navBarMock } from './Navbar.mock'
import * as S from './styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const closeNavBar = () => {
    SoundClickButton()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.Wrapper showNavBar={isOpen}>
        <S.NavBar>
          {navBarMock.map(({ name }) => (
            <S.Item key={name}>
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

export default NavBar
