import ErrorIcon from '@mui/icons-material/Error'

import * as S from './styles'

type ErrorCaseProps = {
  hasMargin?: boolean
  onClick: () => void
}

const ErrorCase = ({ hasMargin, onClick }: ErrorCaseProps) => {
  return (
    <S.Container hasMargin={hasMargin} data-testid='error-case__id'>
      <ErrorIcon fontSize='large' />
      <S.Text>Something went wrong. Please try again.</S.Text>
      <S.RetryButton onClick={onClick}>Retry</S.RetryButton>
    </S.Container>
  )
}

export default ErrorCase
