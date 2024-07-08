import { ReactNode } from 'react'

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

  if (isLoading) return <S.Loading color='inherit' />

  if (hasError)
    return (
      <LayoutBase>
        <S.Content>
          <ErrorCase
            onClick={() =>
              typeof window !== 'undefined' && window.location.reload()
            }
            hasMargin={true}
          />
        </S.Content>
      </LayoutBase>
    )

  return (
    <LayoutBase>
      <S.WrapperContent>
        <DesktopNavbar pages={pages} />
        <S.Content>
          <Breadcrumb />
          {children}
        </S.Content>
      </S.WrapperContent>
    </LayoutBase>
  )
}

export default Layout
