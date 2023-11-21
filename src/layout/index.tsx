import { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import * as S from './styles'

type LayoutProps = {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: LayoutProps) => (
  <S.Container>
    <Header />
    <S.WrapperContent>
      <NavBar />
      <S.Content>{children}</S.Content>
    </S.WrapperContent>
    <Footer />
  </S.Container>
)

export default Layout
