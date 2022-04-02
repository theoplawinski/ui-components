import css from './Footer.module.scss'
import { merge } from '../../helpers/merge'
import Container from '../container/Container'

interface IProps {
  className?: string
}

const Footer = (props: IProps) => {
  return (
    <footer className={merge([css.root, props.className])}>
      <Container>
        <p className={css.text}>
          Built by{' '}
          <a
            className={css.externalLink}
            href="https://theoplawinski.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={css.externalLink_label}>Theo Plawinski</span>
            <span className={css.externalLink_icon} />
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
