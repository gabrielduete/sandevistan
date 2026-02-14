import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import ErrorCase from '~/src/components/ErrorCase'
import SkeletonText from '~/src/components/SkeletonText'
import { usePagesStoraged } from '~/src/contexts/ContextPages'
import { formatedTitle } from '~/src/helpers/formateTitle'
import { getPaths } from '~/src/helpers/getPaths'
import { renderBlock } from '~/src/helpers/notionConverter'
import { Block } from '~/src/helpers/notionConverter/notionConverter.types'
import Layout from '~/src/layout'
import NotFound from './404'

const Content = () => {
  const router = useRouter()

  const [content, setContent] = useState([] as Block[])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)

  const { pages, isLoading: isLoadingPages } = usePagesStoraged()

  const paths = getPaths({ pages })
  const titlePath = formatedTitle(router.query.id?.toString() || '')
  const actualPath = paths?.find(path => path?.title === titlePath)
  const id = actualPath?.id

  useEffect(() => {
    if (!isLoadingPages && pages.length > 0 && router.query.id) {
      if (actualPath) {
        setIsNotFound(false)
      } else {
        setIsNotFound(true)
        setContent([])
      }
    }
  }, [isLoadingPages, pages, actualPath, router.query.id])

  const fetchData = useCallback(async () => {
    if (!id) return

    setIsLoading(true)
    setIsNotFound(false)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}${id}`)

      if (!response.ok) {
        throw new Error(`COULD NOT GET PAGE ID: ${id}`)
      }

      const data = await response.json()

      setContent(data.results)
    } catch (error) {
      console.error('Error fetching data:', error)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    if (router.query.id) {
      setHasError(false)
      setIsNotFound(false)
    }
  }, [router.query.id])

  useEffect(() => {
    if (id && !isNotFound) {
      fetchData()
    }
  }, [id, fetchData, isNotFound])

  if (isNotFound) {
    return <NotFound />
  }

  if (isLoading || isLoadingPages) {
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
