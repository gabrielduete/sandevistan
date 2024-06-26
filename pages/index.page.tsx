import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useGlitch } from 'react-powerglitch'
import Equalizer from '~/src/components/Equalizer'
import { SoundClickButton, SoundGlitch } from '~/src/utils/sounds'

import * as S from './styles'

const Home: NextPage = () => {
  const glitch = useGlitch()

  useEffect(() => {
    const timer = setInterval(() => {
      SoundGlitch()
    }, 2090)

    return () => clearInterval(timer)
  }, [])

  const redirectToAbout = () => {
    SoundClickButton()

    window.open('/about', '_self', 'noreferrer')
  }

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Title ref={glitch.ref}>sandevistan</S.Title>
          <S.Link onClick={redirectToAbout}>
            explore <ArrowRightAltIcon />
          </S.Link>
        </S.Content>
      </S.Wrapper>
      <S.WrapperEqualizer>
        <Equalizer />
      </S.WrapperEqualizer>
    </>
  )
}

export default Home
