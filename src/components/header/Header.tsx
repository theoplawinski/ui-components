import css from './Header.module.scss'
import { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { merge } from '../../helpers/merge'
import { GlobalDataContext } from '../../../pages'
import Container from '../container/Container'
import gsap from 'gsap'

interface IProps {
  className?: string
  isListPlayInComplete: boolean
  onPlayInComplete: () => void
}

const Header = (props: IProps) => {
  const { content } = useContext(GlobalDataContext)

  const buttonList = [
    {
      name: content.header.ctaGithub.name,
      renderer: (
        <a
          className={css.button}
          href={content.header.ctaGithub.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
              fill="currentColor"
            />
          </svg>
        </a>
      )
    }
  ]

  const titleCircleRef = useRef<HTMLSpanElement>(null)
  const titleTextRef = useRef<HTMLSpanElement>(null)
  const buttonsRef = useRef(new Array())

  const playInTl = useRef<gsap.core.Timeline>()
  const buttonsPlayInTl = useRef<gsap.core.Timeline>()

  const initPlayInTl = (): gsap.core.Timeline => {
    const playInTl = gsap.timeline({
      paused: true,
      delay: 0.4
    })

    playInTl
      .fromTo(
        titleCircleRef.current,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'elastic.out(2, 0.75)'
        }
      )
      .to(
        titleCircleRef.current,
        {
          rotate: -360,
          duration: 2,
          ease: 'power4.inOut'
        },
        '<+0.2'
      )
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
        '<+1.2'
      )

    return playInTl
  }

  const initButtonsPlayInTl = (): gsap.core.Timeline => {
    const buttonsPlayInTl = gsap.timeline({
      paused: true
    })

    buttonsPlayInTl.fromTo(
      buttonsRef.current,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'elastic.out(2, 0.75)'
      }
    )

    return buttonsPlayInTl
  }

  useLayoutEffect(() => {
    if (!playInTl.current) playInTl.current = initPlayInTl()
    if (!buttonsPlayInTl.current) buttonsPlayInTl.current = initButtonsPlayInTl()

    if (playInTl.current) playInTl.current.play()
  }, [])

  useEffect(() => {
    if (!props.isListPlayInComplete) return
    if (buttonsPlayInTl.current) buttonsPlayInTl.current.play()
  }, [props.isListPlayInComplete])

  return (
    <header className={merge([css.root, props.className])}>
      <Container className={css.container}>
        <h2 className={css.title}>
          <span className={css.title_circle} ref={titleCircleRef} />
          <span className={css.title_text} ref={titleTextRef}>
            {content.header.title}
          </span>
        </h2>

        <ul className={css.buttonList}>
          {buttonList.map((item, i) => (
            <li
              className={css.buttonItem}
              ref={(r) => (buttonsRef.current[i] = r)}
              key={i}
            >
              {item.renderer}
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

export default Header
