import { ReactNode } from 'react'

import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import Header from './components/Header'
import DesktopNavbar from './components/NavBar/Desktop'
import * as S from './styles'

type LayoutProps = {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: LayoutProps) => (
  <S.Container>
    <Header />
    <S.WrapperContent>
      <DesktopNavbar />
      <S.Content>
        <Breadcrumb />
        {children}
      </S.Content>
    </S.WrapperContent>
    <Footer />
  </S.Container>
)

export default Layout
