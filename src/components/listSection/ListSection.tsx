import css from './ListSection.module.scss'
import { merge } from '../../helpers/merge'
import Container, { EContainerSize } from '../container/Container'
import components from '../UIComponents'

interface IProps {
  className?: string
}

const ListSection = (props: IProps) => {
  return (
    <div className={merge([css.root, props.className])}>
      <Container size={EContainerSize.SMALL}>
        <h1 className={css.title}>
          Collection of reusable
          <br />
          UI Components
        </h1>
      </Container>
      <Container className={css.gridContainer} size={EContainerSize.LARGE}>
        <ul className={css.grid}>
          {components.map((Component, i) => (
            <li className={css.gridItem} key={i}>
              <Component />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default ListSection
