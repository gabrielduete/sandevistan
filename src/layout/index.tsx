import { ReactNode, memo } from 'react'

import ErrorCase from '../components/ErrorCase'
import { usePagesStoraged } from '../contexts/ContextPages'
import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import Header from './components/Header'
import DesktopNavbar from './components/NavBar/Desktop'
import * as S from './styles'

type LayoutProps = {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: LayoutProps) => {
  const { pages, isLoading, hasError } = usePagesStoraged()

  const LayoutBase = ({ children }: LayoutProps) => {
    return (
      <S.Container>
        <Header pages={pages} />
        {children}
        <Footer />
      </S.Container>
    )
  }

  const LayoutBaseMemorized = memo(LayoutBase)

  if (isLoading) return <S.Loading color='inherit' />

  if (hasError)
    return (
      <LayoutBaseMemorized>
        <S.Content>
          <ErrorCase
            onClick={() =>
              typeof window !== 'undefined' && window.location.reload()
            }
            hasMargin={true}
          />
        </S.Content>
      </LayoutBaseMemorized>
    )

  const MemorizedContent = memo(() => (
    <LayoutBaseMemorized>
      <S.WrapperContent>
        <DesktopNavbar pages={pages} />
        <S.Content>
          <Breadcrumb />
          {children}
        </S.Content>
      </S.WrapperContent>
    </LayoutBaseMemorized>
  ))

  MemorizedContent.displayName = 'MemorizedContent'

  return <MemorizedContent />
}

export default Layout
