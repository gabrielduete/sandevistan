import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '~/src/styles/GlobalStyle'
import TextsStyle from '~/src/styles/TextsStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TextsStyle />
      <GlobalStyle />
      <Head>
        <title>sandevistan</title>
        <link rel='icon' href='/assets/images/logo.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
