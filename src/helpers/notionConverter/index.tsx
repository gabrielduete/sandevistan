/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React, { Fragment, ReactNode } from 'react'
import CopyText from '~/src/components/CopyText'
import Text from '~/src/components/Text'

import {
  Block,
  ListBlock,
  RichText,
  TableRowBlock,
} from './notionConverter.types'
import * as S from './styles'

export const renderNestedList = (blocks: ListBlock): ReactNode => {
  const { children } = blocks

  if (!children) return null

  const isNumberedList = children[0]?.type === 'numbered_list_item'

  return isNumberedList ? (
    <ol>{children.map(renderBlock)}</ol>
  ) : (
    <ul>{children.map(renderBlock)}</ul>
  )
}

export const renderBlock = (block: Block): ReactNode => {
  const { type, id } = block
  const value = block[type as keyof Block] as any
  const text = value?.rich_text

  switch (type) {
    case 'paragraph':
      return (
        <S.Text>
          <Text title={text} />
        </S.Text>
      )

    case 'heading_1':
      return (
        <h1>
          <Text title={text} />
        </h1>
      )

    case 'heading_2':
      return (
        <h2>
          <Text title={text} />
        </h2>
      )

    case 'heading_3':
      return (
        <h3>
          <Text title={text} />
        </h3>
      )

    case 'bulleted_list':
      return <ul>{(value as ListBlock)?.children?.map(renderBlock)}</ul>

    case 'numbered_list':
      return <ol>{(value as ListBlock)?.children?.map(renderBlock)}</ol>

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text title={value?.rich_text} />
          {!!value?.children && renderNestedList(block as ListBlock)}
        </li>
      )

    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type='checkbox' id={id} defaultChecked={value?.checked} />
            <Text title={value?.rich_text} />
          </label>
        </div>
      )

    case 'toggle':
      return (
        <details>
          <summary>
            <Text title={value?.rich_text} />
          </summary>
          {block.children?.map(child => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      )

    case 'child_page':
      return (
        <div>
          <strong>{value?.title}</strong>
          {block.children?.map(renderBlock)}
        </div>
      )

    case 'image':
      const src =
        value?.type === 'external' ? value.external?.url : value?.file?.url
      const caption = value?.caption ? value.caption[0]?.plain_text : ''

      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )

    case 'divider':
      return <hr />

    case 'quote':
      return <blockquote>{value?.rich_text[0].plain_text}</blockquote>

    case 'code':
      const code = value?.rich_text[0].plain_text

      return (
        <S.WrapperCode>
          <S.WrapperIcons>
            Code
            <CopyText value={code} />
          </S.WrapperIcons>
          <pre>
            <var>{code}</var>
          </pre>
        </S.WrapperCode>
      )

    case 'file':
      const srcFile =
        value?.type === 'external' ? value.external?.url : value?.file?.url
      const fileName = srcFile?.split('/').pop()?.split('?')[0]
      const fileCaption = value?.caption ? value.caption[0]?.plain_text : ''

      return (
        <figure>
          <div>
            📎
            <Link href={srcFile} passHref>
              {fileName}
            </Link>
          </div>
          {fileCaption && <figcaption>{fileCaption}</figcaption>}
        </figure>
      )

    case 'bookmark':
      return (
        <a href={value?.url} target='_blank' rel='noreferrer noopener'>
          {value?.url}
        </a>
      )

    case 'table':
      return (
        <table>
          <tbody>
            {block.children?.map((child, index) => {
              const rowValue = (child as TableRowBlock).table_row
              const RowElement =
                value?.has_column_header && index === 0 ? 'th' : 'td'

              return (
                <tr key={child.id}>
                  {rowValue?.cells.map((cell: RichText[], i: number) => (
                    <RowElement key={`${cell[0].plain_text}-${i}`}>
                      <Text title={cell} />
                    </RowElement>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      )

    case 'column_list':
      return <div>{block.children?.map(renderBlock)}</div>

    case 'column':
      return <div>{block.children?.map(renderBlock)}</div>

    default:
      return 'Unsupported tag'
  }
}
