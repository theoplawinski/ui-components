import '../src/index.scss'
import '../styles.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import WindowHelper from '../src/helpers/WindowHelper'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    new WindowHelper()
  })

  return <Component {...pageProps} />
}

export default App
