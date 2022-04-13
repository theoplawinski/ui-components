import css from './SoundBar.module.scss'

const Component = () => {
  return (
    <div className={css.root}>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
    </div>
  )
}

const htmlStructure = `soundbar html`

const cssStyles = `soundbar css`

const scssStyles = `soundbar scss`

export default { Component, htmlStructure, cssStyles, scssStyles }
