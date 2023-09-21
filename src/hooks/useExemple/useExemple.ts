import Router from 'next/router'

type useExempleTypes = {
  path: string
  external?: boolean
}

const useExemple = () => {
  const hasExternalUrl = (path: string) => /(http|https)/.test(path)

  const redirect = ({ path, external }: useExempleTypes) => {
    const isWindow = typeof window !== 'undefined'

    hasExternalUrl(path) && isWindow
      ? window.open(
          path,
          `${external ? '_blank' : '_self'}`,
          'noopener noreferrer'
        )
      : isWindow && Router.push(path)
  }

  return { redirect }
}

export default useExemple
