import css from './Header.module.scss'
import { useContext, useLayoutEffect, useRef } from 'react'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'
import Container from '../container/Container'
import gsap from 'gsap'

interface IProps {
  className?: string
  onPlayInComplete: () => void
}

const Header = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  const titleCircleRef = useRef<HTMLSpanElement>(null)
  const titleTextRef = useRef<HTMLSpanElement>(null)

  const tl = useRef<gsap.core.Timeline>()

  const initTl = (): gsap.core.Timeline => {
    const tl = gsap.timeline({
      paused: true,
      delay: 0.4
    })

    tl.fromTo(
      titleCircleRef.current,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'elastic.out(1.7, 0.5)'
      }
    )
      .to(titleCircleRef.current, {
        rotate: -360,
        duration: 1.5,
        repeat: 1,
        repeatDelay: 0.1,
        ease: 'power4.inOut'
      })
      .fromTo(
        titleTextRef.current,
        {
          rotate: 30,
          opacity: 0
        },
        {
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          onStart: () => props.onPlayInComplete()
        },
        '<+2.5'
      )

    return tl
  }

  useLayoutEffect(() => {
    if (!tl.current) tl.current = initTl()
    if (tl.current) tl.current.play()
  }, [])

  return (
    <header className={merge([css.root, props.className])}>
      <Container>
        <h2 className={css.title}>
          <span className={css.title_circle} ref={titleCircleRef} />
          <span className={css.title_text} ref={titleTextRef}>
            {content.header.title}
          </span>
        </h2>
      </Container>
    </header>
  )
}

export default Header
