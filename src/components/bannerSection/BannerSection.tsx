import css from './BannerSection.module.scss'
import { useContext } from 'react'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'
import Container, { EContainerSize } from '../container/Container'

interface IProps {
  className?: string
}

const BannerSection = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  return (
    <div className={merge([css.root, props.className])}>
      <Container className={css.container} size={EContainerSize.SMALL}>
        <h3 className={css.subTitle}>{content.bannerSection.subtitle}</h3>
        <h2 className={css.title}>{content.bannerSection.title}</h2>
        <a
          className={css.link}
          href={content.bannerSection.externalLink.to}
          data-text={content.bannerSection.externalLink.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={css.linkText}>{content.bannerSection.externalLink.name}</span>
        </a>
      </Container>
    </div>
  )
}

export default BannerSection
