import React, { useEffect, useState } from 'react'
import Sound from 'react-sound'
import LOCALSTORAGES from '~/src/enums/localstorages'

import { STATUS_SOUND, settings } from './Equalizer.data'
import * as S from './styles'

export type StatusSound = 'PLAYING' | 'PAUSED'

const Equalizer = () => {
  const [status, setStatus] = useState<StatusSound>('PLAYING')

  const isPlaying = status === STATUS_SOUND.PLAYING

  useEffect(() => {
    const storedStatus = localStorage.getItem(
      LOCALSTORAGES.BG_SOUND
    ) as StatusSound

    storedStatus && setStatus(storedStatus)
  }, [])

  const toggleStatus = () => {
    const newStatus: StatusSound = isPlaying
      ? STATUS_SOUND.PAUSED
      : STATUS_SOUND.PLAYING

    localStorage.setItem(LOCALSTORAGES.BG_SOUND, newStatus)
    setStatus(newStatus)
  }

  return (
    <S.Wrapper onClick={toggleStatus}>
      {/* <Sound playStatus={status} {...settings} /> */}

      {isPlaying ? (
        <>
          <S.Line data-testid='equalizer_line' />
          <S.Line />
          <S.Line />
        </>
      ) : (
        <S.ClosedLine data-testid='equalizer_closedLine' />
      )}
    </S.Wrapper>
  )
}

export default Equalizer
