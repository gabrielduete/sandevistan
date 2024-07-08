import { useRouter } from 'next/router'

import MobileNavBar from '../NavBar/Mobile'
import { NavBarProps } from '../NavBar/Navbar.types'
import { items } from './Header.data'
import * as S from './styles'

const Header = ({ pages }: NavBarProps) => {
  const router = useRouter()

  return (
    <S.Header>
      <S.WrapperLinks>
        {items.map(({ name, href }) => {
          const isPath = router?.pathname === href

          return (
            <S.Link href={href} key={name} isPath={isPath}>
              {name}
            </S.Link>
          )
        })}
      </S.WrapperLinks>
      <MobileNavBar pages={pages} />
    </S.Header>
  )
}

export default Header
