import { ReactNode, memo, useState } from 'react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(true)

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

  if (isLoading)
    return (
      <S.LoadingContainer>
        <S.Loading color='inherit' data-testid='layout__loader' />
        <S.LoadingText>
          Sorry for the delay 😅 I&apos;m hosting the backend on a free
          platform, so it takes a bit longer to wake up.
        </S.LoadingText>
      </S.LoadingContainer>
    )

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
      <DesktopNavbar
        pages={pages}
        isOpen={isMenuOpen}
        onToggle={setIsMenuOpen}
        data-testid='layout__navbar'
      />
      <S.WrapperContent isMenuOpen={isMenuOpen}>
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
