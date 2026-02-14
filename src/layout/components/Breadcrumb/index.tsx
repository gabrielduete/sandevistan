import { useRouter } from 'next/router'
import React from 'react'

import * as S from './styles'
import { Paths } from '~/src/enums/paths'

const Breadcrumb = () => {
  const router = useRouter()

  const params = router?.asPath.split('/')

  const lastElement = params?.slice(-1)[0]

  const goToPath = (index: number) => {
    const path = '/' + params.slice(1, index + 1).join('/')
    router.push(path)
  }

  return (
    <S.Container>
      <S.Icon onClick={() => router.push(Paths.HOME)} />
      {params?.map((param, index) => {
        const formatedLink = param.charAt(0).toUpperCase() + param.slice(1)

        const isActualPath = param === lastElement

        return (
          <>
            <S.Link
              onClick={() => {
                goToPath(index)
              }}
              isActualPath={isActualPath}
            >
              {formatedLink}
            </S.Link>
            {!isActualPath && <S.Simbol>{'>'}</S.Simbol>}
          </>
        )
      })}
    </S.Container>
  )
}

export default Breadcrumb
