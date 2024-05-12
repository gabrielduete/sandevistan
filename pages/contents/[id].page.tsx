import Head from 'next/head'
import { useEffect, useState } from 'react'
import { usePagesStoraged } from '~/src/contexts/ContextPages'
import { renderBlock } from '~/src/helpers/notionConverter'
import Layout from '~/src/layout'

const Content = () => {
  const { idPage } = usePagesStoraged()
  const [content, setContent] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`http://localhost:8080/${idPage}`)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()

        setContent(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [idPage])

  const title = 'teste'

  if (isLoading) {
    return (
      <Layout>
        <h1>LOADING</h1>
      </Layout>
    )
  }

  if (hasError) {
    return (
      <Layout>
        <h1>ERROR</h1>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>Sandevistan - {title}</title>
      </Head>
      <Layout>
        <h1>{title}</h1>
        <div>{content?.map(block => renderBlock(block))}</div>
      </Layout>
    </>
  )
}

export default Content
