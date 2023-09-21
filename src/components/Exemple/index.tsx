import React from 'react'
import * as S from './styles'

type ExempleProps = {
  pascalCase: string
}

const Exemple = ({ pascalCase }: ExempleProps) => {
  return (
    <S.Wrapper data-testid='exemple'>Exemple component {pascalCase}</S.Wrapper>
  )
}

export default Exemple
