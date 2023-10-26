import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '~/src/styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>sandevistan</title>
        <link
          rel='icon'
          href='https://cdn.discordapp.com/attachments/778024116140769331/1157476264165249135/logo.png?ex=6518bf46&is=65176dc6&hm=8a17328726bd0b87caf469a81abc88716decf38c4fab756e3bc181fe08b0b5c3&'
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
