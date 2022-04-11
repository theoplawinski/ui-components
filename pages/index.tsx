import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useMemo, useState } from 'react'
import { IGlobalData } from '../src/data/data-type'
import content from '../src/data/content.json'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import ListSection from '../src/components/listSection/ListSection'
import BannerSection from '../src/components/bannerSection/BannerSection'

export const GlobalDataContext = React.createContext<IGlobalData>({
  content
})

const Home: NextPage = () => {
  const title = 'UI Components'
  const description = 'Collection of reusable UI Components'
  const url = 'https://theoplawinski.github.io/ui-components/'
  const ogImage = 'https://theoplawinski.github.io/ui-components/og-image.jpg'

  const [isPlayInComplete, setIsPlayInComplete] = useState<boolean>(false)
  const [isLogoPlayInComplete, setIsLogoPlayInComplete] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (isPlayInComplete) document.documentElement.classList.remove('locked')
    else document.documentElement.classList.add('locked')
  }, [isPlayInComplete])

  const globalData = useMemo(() => {
    return { content }
  }, [])

  return (
    <>
      <Head>
        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />

        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta name="og:url" content={url} />
        <meta name="author" content="Theo Plawinski" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@theoplawinski" />
        <meta name="twitter:creator" content="@theoplawinski" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#ff424d" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalDataContext.Provider value={globalData}>
        <Header
          isListPlayInComplete={isPlayInComplete}
          onPlayInComplete={() => setIsLogoPlayInComplete(true)}
        />
        <ListSection
          isLogoPlayInComplete={isLogoPlayInComplete}
          onPlayInComplete={() => setIsPlayInComplete(true)}
        />
        <BannerSection />
        <Footer />
      </GlobalDataContext.Provider>
    </>
  )
}

export default Home
