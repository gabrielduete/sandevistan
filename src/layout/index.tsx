import { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

type LayoutProps = {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
