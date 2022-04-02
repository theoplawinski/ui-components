import css from './Footer.module.scss'
import { useContext } from 'react'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'
import Container from '../container/Container'

interface IProps {
  className?: string
}

const Footer = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  return (
    <footer className={merge([css.root, props.className])}>
      <Container>
        <p className={css.text}>
          {content.footer.text}{' '}
          <a
            className={css.externalLink}
            href={content.footer.externalLink.to}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={css.externalLink_label}>
              {content.footer.externalLink.name}
            </span>
            <span className={css.externalLink_icon} />
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
