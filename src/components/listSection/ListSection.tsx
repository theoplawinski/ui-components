import css from './ListSection.module.scss'
import { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { createToast } from 'vercel-toast'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'
import Container, { EContainerSize } from '../container/Container'
import components from '../UIComponents'
import gsap from 'gsap'
import { useMediaQuery } from '@react-hook/media-query'
import { atoms } from '../../atoms/atoms'
import ListItem from '../listItem/ListItem'

interface IProps {
  className?: string
  isLogoPlayInComplete: boolean
  onPlayInComplete: () => void
}

const ListSection = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  const titleLines = useRef(new Array())
  const gridRef = useRef<HTMLUListElement>(null)

  const titleRaw = content.listSection.title
  const title = titleRaw.split('#')

  const isDesktop = useMediaQuery(
    `only screen and (min-width: ${atoms['breakpointTablet']})`
  )

  const tl = useRef<gsap.core.Timeline>()

  const initTl = (): gsap.core.Timeline => {
    const tl = gsap.timeline({
      paused: true,
      delay: 0.35,
      onComplete: () => props.onPlayInComplete()
    })

    tl.fromTo(
      titleLines.current,
      {
        y: isDesktop ? 70 : 35,
        rotate: 30,
        opacity: 0
      },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      }
    ).fromTo(
      gridRef.current,
      {
        y: isDesktop ? 70 : 35,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out'
      },
      '<+0.6'
    )

    return tl
  }

  useLayoutEffect(() => {
    if (!tl.current) tl.current = initTl()
  }, [])

  useEffect(() => {
    if (!props.isLogoPlayInComplete) return
    if (tl.current) tl.current.play()
  }, [props.isLogoPlayInComplete])

  return (
    <div className={merge([css.root, props.className])}>
      <Container size={EContainerSize.SMALL}>
        <h1 className={css.title}>
          {title.map((textLine, i) => (
            <div
              className={css.title_line}
              ref={(r) => (titleLines.current[i] = r)}
              key={i}
            >
              {textLine}
            </div>
          ))}
        </h1>
      </Container>
      <Container className={css.gridContainer} size={EContainerSize.LARGE}>
        <ul className={css.grid} ref={gridRef}>
          {components.map(({ Component, htmlStructure, cssStyles, scssStyles }, i) => (
            <ListItem
              htmlStructure={htmlStructure}
              cssStyles={cssStyles}
              scssStyles={scssStyles}
              key={i}
            >
              <Component />
            </ListItem>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default ListSection
