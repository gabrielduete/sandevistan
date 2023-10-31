import { useRouter } from 'next/router'

import { items } from './Header.data'
import * as S from './styles'

const Header = () => {
  const router = useRouter()

  return (
    <S.Header>
      {items.map(({ name, href }) => {
        const isPath = router?.pathname === href

        return (
          <S.Link href={href} key={name} isPath={isPath}>
            {name}
          </S.Link>
        )
      })}
    </S.Header>
  )
}

export default Header
