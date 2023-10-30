import { items } from './Header.data'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      {items.map(({ name, href }) => {
        return (
          <S.Link href={href} key={name}>
            {name}
          </S.Link>
        )
      })}
    </S.Header>
  )
}

export default Header
