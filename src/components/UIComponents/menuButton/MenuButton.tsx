import css from './MenuButton.module.scss'

const Component = () => {
  return (
    <div className={css.root}>
      <span className={css.line} />
    </div>
  )
}

const htmlStructure = `menu button html`

const cssStyles = `menu button css`

const scssStyles = `menu button scss`

export default { Component, htmlStructure, cssStyles, scssStyles }
