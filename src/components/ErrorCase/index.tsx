import ErrorIcon from '@mui/icons-material/Error'

import * as S from './styles'

type ErrorCaseProps = {
  hasMargin?: boolean
}

const ErrorCase = ({ hasMargin }: ErrorCaseProps) => {
  return (
    <S.Container hasMargin={hasMargin}>
      <ErrorIcon fontSize='large' />
      <S.Text>Something went wrong. Please try again.</S.Text>
      <S.RetryButton>RETRY</S.RetryButton>
    </S.Container>
  )
}

export default ErrorCase
