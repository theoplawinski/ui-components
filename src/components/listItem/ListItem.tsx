import css from './ListItem.module.scss'
import { ReactNode, useContext } from 'react'
import { createToast } from 'vercel-toast'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'

interface IProps {
  className?: string
  htmlStructure: string
  cssStyles: string
  scssStyles: string
  children: ReactNode
}

const ListItem = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  const copyToClipboard = (message: string, messageType: string) => {
    navigator.clipboard.writeText(message).then(
      () => {
        createToast(`Copied ${messageType} to clipboard`, {
          timeout: 3000
        })
      },
      () => {
        createToast('Failed to copy', {
          timeout: 3000
        })
      }
    )
  }

  return (
    <li className={merge([css.root, props.className])}>
      <div className={css.wrapper}>{props.children}</div>
      <div className={css.buttons}>
        <button
          className={css.button}
          onClick={() => copyToClipboard(props.htmlStructure, 'HTML structure')}
        >
          HTML
        </button>
        <button
          className={css.button}
          onClick={() => copyToClipboard(props.cssStyles, 'CSS styles')}
        >
          CSS
        </button>
        <button
          className={css.button}
          onClick={() => copyToClipboard(props.scssStyles, 'SCSS styles')}
        >
          SCSS
        </button>
      </div>
    </li>
  )
}

export default ListItem
