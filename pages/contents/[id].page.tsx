import Head from 'next/head'
import { extractedTexts } from '~/src/helpers'
import usePages from '~/src/hooks/getPages'
import Layout from '~/src/layout'

const Contents = () => {
  const { pages, isLoading } = usePages()

  if (isLoading) {
    return (
      <Layout>
        <h1>LOADING</h1>
      </Layout>
    )
  }

  const title = pages[0]?.heading_1?.rich_text[0]?.plain_text

  console.log(extractedTexts)

  return (
    <>
      <Head>
        <title>Sandevistan - {title}</title>
      </Head>
      <Layout>
        <h1>{title}</h1>
      </Layout>
    </>
  )
}

export default Contents
