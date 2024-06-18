import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Block } from '~/src/helpers/notionConverter/notionConverter.types'

type PagesStoraged = {
  idPage: string
  setIdPage: (idPages: string) => void
  pages: Block[]
  isLoading: boolean
  hasError: boolean
}

const initialContextValue: PagesStoraged = {
  idPage: '',
  setIdPage: () => {
    console.log()
  },
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
  const [idPage, setIdPage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:8080/')

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
  }, [idPage])

  const contextValue: PagesStoraged = {
    pages,
    idPage,
    setIdPage,
    isLoading,
    hasError,
  }

  return (
    <PagesStoragedContext.Provider value={contextValue}>
      {children}
    </PagesStoragedContext.Provider>
  )
}
