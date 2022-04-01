import css from './Container.module.scss'
import { ReactNode } from 'react'
import { merge } from '../../helpers/merge'

export enum EContainerSize {
  LARGE = 'large',
  SMALL = 'small'
}

interface IProps {
  className?: string
  size?: EContainerSize
  children?: ReactNode
}

const Container = (props: IProps) => {
  return <div className={merge([css.root, css[`root_${props.size}`], props.className])}>{props.children}</div>
}

Container.defaultProps = {
  size: EContainerSize.LARGE
} as IProps

export default Container
