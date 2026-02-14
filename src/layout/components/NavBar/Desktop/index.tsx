import { useRouter } from 'next/router'
import { memo, useState } from 'react'

import { formatedTitle } from '../../../../helpers/formateTitle'
import { getPaths } from '../../../../helpers/getPaths'
import { NavBarProps } from '../Navbar.types'
import * as S from './styles'

const DesktopNavBar = ({
  pages,
  isOpen: isOpenProp,
  onToggle,
}: NavBarProps) => {
  const router = useRouter()
  const [internalIsOpen, setInternalIsOpen] = useState(true)
  const isOpen = isOpenProp !== undefined ? isOpenProp : internalIsOpen

  const closeNavBar = () => {
    const newState = !isOpen
    if (onToggle) {
      onToggle(newState)
    } else {
      setInternalIsOpen(newState)
    }
  }

  const paths = getPaths({ pages })

  const isActive = (title: string) => {
    const currentPath = router.asPath.split('#')[0]
    const pathSegment = currentPath.split('/').pop() || ''

    return pathSegment === formatedTitle(title, true)
  }

  return (
    <>
      <S.Wrapper showNavBar={isOpen}>
        <S.NavBar>
          {paths?.map(({ title }) => (
            <S.Item
              key={title}
              onClick={() => router.push(formatedTitle(title, true))}
              isActive={isActive(title)}
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
