import css from './ThemeSwitcher.module.scss'
import { useContext } from 'react'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'
import { useTheme } from 'next-themes'
import { EThemeColor } from '../../atoms/EThemeColor'

interface IProps {
  className?: string
}

const ThemeSwitcher = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  const { theme, setTheme } = useTheme()

  const toggleThemeHandler = () => {
    if (theme === EThemeColor.LIGHT) setTheme(EThemeColor.DARK)
    else setTheme(EThemeColor.LIGHT)
  }

  return (
    <button className={merge([css.root, props.className])} onClick={toggleThemeHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2V4a8 8 0 1 0 0 16z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

export default ThemeSwitcher
