import { ReactNode, createContext, useContext, useState } from 'react'

type PagesStoraged = {
  idPage: string
  setIdPage: (idPages: string) => void
}

const initialContextValue: PagesStoraged = {
  idPage: '',
  setIdPage: () => {
    console.log()
  },
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
  const [idPage, setIdPage] = useState('')

  const contextValue: PagesStoraged = {
    idPage,
    setIdPage,
  }

  return (
    <PagesStoragedContext.Provider value={contextValue}>
      {children}
    </PagesStoragedContext.Provider>
  )
}
