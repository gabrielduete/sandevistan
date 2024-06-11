import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'

import * as S from './styles'

type CopyTextProps = {
  value: {
    value: string
  }
}

const CopyText = ({ value }: CopyTextProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(value?.value)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  if (isCopied) {
    return (
      <S.WrapperCopied>
        <CheckIcon /> Copiado!
      </S.WrapperCopied>
    )
  }

  return <S.IconCopy onClick={onCopy} />
}

export default CopyText
