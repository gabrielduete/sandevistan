import { useEffect, useState } from 'react'

const usePages = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [pages, setPages] = useState([])

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)

      const hasId = id ?? ''

      try {
        const response = await fetch(`http://localhost:8080/${hasId}`)

        const data = await response.json()

        setPages(data)
      } catch (error) {
        console.error(`Has error ocurred: ${error}`)

        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [id])

  return {
    pages,
    isLoading,
    hasError,
  }
}

export default usePages
