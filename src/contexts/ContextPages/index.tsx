import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Block } from '~/src/helpers/notionConverter/notionConverter.types'

type PagesStoraged = {
  pages: Block[]
  isLoading: boolean
  hasError: boolean
}

const initialContextValue: PagesStoraged = {
  pages: [],
  isLoading: false,
  hasError: false,
}

export const PagesStoragedContext =
  createContext<PagesStoraged>(initialContextValue)

export const usePagesStoraged = () => {
  const context = useContext(PagesStoragedContext)
  return context
}

export const PagesStoregedProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [pages, setPages] = useState([] as Block[])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}`)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setPages(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const contextValue = useMemo(
    () => ({
      pages,
      isLoading,
      hasError,
    }),
    [pages, isLoading, hasError]
  )

  return (
    <PagesStoragedContext.Provider value={contextValue}>
      {children}
    </PagesStoragedContext.Provider>
  )
}
