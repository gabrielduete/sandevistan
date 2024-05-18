import Head from 'next/head'
import { useEffect, useState } from 'react'
import { usePagesStoraged } from '~/src/contexts/ContextPages'
import { renderBlock } from '~/src/helpers/notionConverter'
import Layout from '~/src/layout'

const Content = () => {
  const [content, setContent] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const { idPage } = usePagesStoraged()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`http://localhost:8080/${idPage}`)

        if (!response.ok) {
          throw new Error(`COUND NOT GET PAGE ID: ${idPage}`)
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
        <title>Sandevistan</title>
      </Head>
      <Layout>
        <div>
          {content?.map(block => (
            <div key={block}>{renderBlock(block)}</div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Content
