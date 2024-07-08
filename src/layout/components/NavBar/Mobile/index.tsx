import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { formatedTitle } from '../../../../helpers/formateTitle'
import { getPaths } from '../../../../helpers/getPaths'
import { NavBarProps } from '../Navbar.types'
import * as S from './styles'

const MobileNavBar = ({ pages }: NavBarProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const paths = getPaths({ pages })

  return (
    <S.Container>
      <S.IconOpen onClick={() => setIsOpen(true)} />
      <S.WrapperContent isOpen={isOpen}>
        <S.IconClose onClick={() => setIsOpen(false)} />
        <S.WrapperLinks>
          {paths?.map(({ title, id }) => {
            return (
              <S.Link
                key={id}
                onClick={() => router.push(formatedTitle(title, true))}
              >
                {title}
              </S.Link>
            )
          })}
        </S.WrapperLinks>
      </S.WrapperContent>
    </S.Container>
  )
}

export default MobileNavBar
