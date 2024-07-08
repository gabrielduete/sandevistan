import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { usePagesStoraged } from '~/src/contexts/ContextPages'

import { NavBarProps } from '../Navbar.types'
import { titleWithHyphens } from '../helpers/formateTitle'
import { getPaths } from '../helpers/getPaths'
import * as S from './styles'

const MobileNavBar = ({ pages }: NavBarProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { setIdPage } = usePagesStoraged()

  const goToContent = (id: string, title: string) => {
    setIdPage(id)
    router.push(titleWithHyphens(title))
  }

  const paths = getPaths({ pages })

  return (
    <S.Container>
      <S.IconOpen onClick={() => setIsOpen(true)} />
      <S.WrapperContent isOpen={isOpen}>
        <S.IconClose onClick={() => setIsOpen(false)} />
        <S.WrapperLinks>
          {paths?.map(({ title, id }) => {
            return (
              <S.Link key={id} onClick={() => goToContent(id, title)}>
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
