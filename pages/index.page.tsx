import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import type { NextPage } from 'next'
import { useGlitch } from 'react-powerglitch'

import * as S from './styles'

const Home: NextPage = () => {
  const glitch = useGlitch()

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Title ref={glitch.ref}>sandevistan</S.Title>
          <S.Link onClick={() => window.open('/about', '_self', 'noreferrer')}>
            explore <ArrowRightAltIcon />
          </S.Link>
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default Home
