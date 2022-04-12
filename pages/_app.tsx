import '../src/index.scss'
import '../styles.css'
import 'vercel-toast/dist/vercel-toast.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import WindowHelper from '../src/helpers/WindowHelper'
import { ThemeProvider } from 'next-themes'
import { EThemeColor } from '../src/atoms/EThemeColor'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    new WindowHelper()
  })

  return (
    <ThemeProvider defaultTheme={EThemeColor.LIGHT}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
