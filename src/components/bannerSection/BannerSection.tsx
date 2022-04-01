import css from './BannerSection.module.scss'
import { merge } from '../../helpers/merge'
import Container, { EContainerSize } from '../container/Container'

interface IProps {
  className?: string
}

const BannerSection = (props: IProps) => {
  return (
    <div className={merge([css.root, props.className])}>
      <Container className={css.container} size={EContainerSize.SMALL}>
        <h3 className={css.subTitle}>Dev source</h3>
        <h2 className={css.title}>The source code is<br />available on Github</h2>
        <a className={css.link} href="" data-text="Github page">
          <span className={css.linkText}>Github page</span>
        </a>
      </Container>
    </div>
  )
}

export default BannerSection
