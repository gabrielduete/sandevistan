import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PagesStoregedProvider } from '~/src/contexts/ContextPages'
import GlobalStyle from '~/src/styles/GlobalStyle'
import TextsStyle from '~/src/styles/TextsStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PagesStoregedProvider>
      <TextsStyle />
      <GlobalStyle />
      <Head>
        <title>sandevistan</title>
        <link rel='icon' href='/assets/images/logo.png' />
      </Head>
      <Component {...pageProps} />
    </PagesStoregedProvider>
  )
}

export default MyApp
