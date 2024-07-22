import { useRouter } from 'next/router'
import { memo, useState } from 'react'

import { formatedTitle } from '../../../../helpers/formateTitle'
import { getPaths } from '../../../../helpers/getPaths'
import { NavBarProps } from '../Navbar.types'
import * as S from './styles'

const DesktopNavBar = ({ pages }: NavBarProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const closeNavBar = () => {
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
          <S.BackIcon
            onClick={closeNavBar}
            data-testid='navbar__button-close'
          />
        </S.RollbackContainer>
      </S.Wrapper>
      <S.WrapperColapsed showNavBar={!isOpen}>
        <S.GoIcon onClick={closeNavBar} />
      </S.WrapperColapsed>
    </>
  )
}

export default memo(DesktopNavBar)
