import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import ErrorCase from '~/src/components/ErrorCase'
import SkeletonText from '~/src/components/SkeletonText'
import { usePagesStoraged } from '~/src/contexts/ContextPages'
import { renderBlock } from '~/src/helpers/notionConverter'
import { Block } from '~/src/helpers/notionConverter/notionConverter.types'
import Layout from '~/src/layout'

const Content = () => {
  const [content, setContent] = useState([] as Block[])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const { idPage } = usePagesStoraged()

  const fetchData = useCallback(async () => {
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
  }, [idPage])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) {
    return (
      <Layout>
        <SkeletonText />
      </Layout>
    )
  }

  if (hasError) {
    return (
      <Layout>
        <ErrorCase onClick={() => fetchData()} />
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
            <div key={block.id}>{renderBlock(block)}</div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Content
