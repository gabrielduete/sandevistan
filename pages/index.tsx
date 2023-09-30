import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useEffect } from 'react'
import { useGlitch } from 'react-powerglitch'
import Sound from 'react-sound'
import Equalizer from '~/src/components/Equalizer'
import { SoundClickButton, SoundGlitch } from '~/src/utils/Sounds'

import { settingsGlitch, settingsSound } from './settings'
import * as S from './styles'

const Home = () => {
  const glitch = useGlitch({
    ...settingsGlitch,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      SoundGlitch()
    }, 2090)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Sound playStatus={Sound.status.PLAYING} {...settingsSound} />
      <S.Wrapper>
        <S.Content>
          <S.Title ref={glitch.ref}>sandevistan</S.Title>
          <S.Link onClick={() => SoundClickButton()}>
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
