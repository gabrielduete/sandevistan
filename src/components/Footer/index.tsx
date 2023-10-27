import { items } from './Footer.data'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      {items.map(({ name, href }, idx) => {
        return (
          <S.Link href={href} target='_blank' key={idx}>
            {name}
          </S.Link>
        )
      })}
    </S.Footer>
  )
}

export default Footer
