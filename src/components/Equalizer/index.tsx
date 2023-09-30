import React, { useState } from 'react'
import Sound from 'react-sound'

import { settings } from './Equalizer.data'
import * as S from './styles'

const Equalizer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <S.Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Sound
        playStatus={isOpen ? Sound.status.PLAYING : Sound.status.PAUSED}
        {...settings}
      />
      {isOpen ? (
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
