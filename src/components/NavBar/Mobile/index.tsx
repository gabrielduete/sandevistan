import React, { useState } from 'react'

import { navBarMock } from '../Navbar.mock'
import * as S from './styles'

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.IconOpen onClick={() => setIsOpen(true)} />
      <S.WrapperContent isOpen={isOpen}>
        <S.IconClose onClick={() => setIsOpen(false)} />
        <S.WrapperLinks>
          {navBarMock.map(({ name }, idx) => {
            return <S.Link key={idx}>{name}</S.Link>
          })}
        </S.WrapperLinks>
      </S.WrapperContent>
    </S.Container>
  )
}

export default MobileNavBar
