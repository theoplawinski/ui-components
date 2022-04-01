import css from './Footer.module.scss'
import { merge } from '../../helpers/merge'

interface IProps {
  className?: string
}

const Footer = (props: IProps) => {
  return <footer className={merge([css.root, props.className])}>Footer</footer>
}

export default Footer
