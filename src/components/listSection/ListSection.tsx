import css from './ListSection.module.scss'
import { createRef, MutableRefObject, useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { merge } from '../../helpers/merge'
import Container, { EContainerSize } from '../container/Container'
import components from '../UIComponents'
import gsap from 'gsap'

interface IProps {
  className?: string
  isLogoPlayInComplete: boolean
  onPlayInComplete: () => void
}

const ListSection = (props: IProps) => {
  const titleLines = useRef(new Array())
  const gridRef = useRef<HTMLUListElement>(null)

  const titleRaw = 'Collection of reusable#UI Components'
  const title = titleRaw.split('#')

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
        y: 70,
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
        y: 70,
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
