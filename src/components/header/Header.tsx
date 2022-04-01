import css from './Header.module.scss'
import { merge } from '../../helpers/merge'
import Container from '../container/Container'

interface IProps {
  className?: string
}

const Header = (props: IProps) => {
  return (
    <header className={merge([css.root, props.className])}>
      <Container>
        <h2 className={css.title}>UI Components</h2>
      </Container>
    </header>
  )
}

export default Header
