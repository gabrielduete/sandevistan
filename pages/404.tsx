import Head from 'next/head'
import Layout from '~/src/layout'
import * as S from './404.styles'

const NotFound = () => {

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Sandevistan</title>
      </Head>
      <Layout>
        <S.Container>
          <S.Title>404</S.Title>
          <S.Message>Page not found</S.Message>
        </S.Container>
      </Layout>
    </>
  )
}

export default NotFound

