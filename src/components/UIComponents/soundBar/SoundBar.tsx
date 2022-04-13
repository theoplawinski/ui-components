import css from './SoundBar.module.scss'

const Component = () => {
  return (
    <div className={css.root}>
      <span className={css.bar} />
      <span className={css.bar} />
      <span className={css.bar} />
      <span className={css.bar} />
      <span className={css.bar} />
      <span className={css.bar} />
    </div>
  )
}

const htmlStructure = `
<div class="soundBar">
    <span class="soundBar_line"></span>
    <span class="soundBar_line"></span>
    <span class="soundBar_line"></span>
    <span class="soundBar_line"></span>
    <span class="soundBar_line"></span>
    <span class="soundBar_line"></span>
</div>
`

const cssStyles = `
@keyframes animation {
    from {
        transform: scaleY(1);
    }

    to {
        transform: scaleY(0.2);
    }
}

.soundBar {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
}

.soundBar:hover .soundBar_line {
    animation-play-state: paused;
    opacity: 0.5;
}

.soundBar_line {
    transform-origin: center;
    width: 3px;
    height: 25px;
    margin: 0 1px;
    animation-name: animation;
    animation-delay: 0.7s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transition: opacity 0.3s ease;
    background-color: #FF434D;
}

.soundBar_line:nth-child(1) {
    animation-duration: 0.47s;
}

.soundBar_line:nth-child(2) {
    animation-duration: 0.43s;
}

.soundBar_line:nth-child(3) {
    animation-duration: 0.4s;
}

.soundBar_line:nth-child(4) {
    animation-duration: 0.45s;
}

.soundBar_line:nth-child(5) {
    animation-duration: 0.43s;
}

.soundBar_line:nth-child(6) {
    animation-duration: 0.42s;
}
`

const scssStyles = `
@keyframes animation {
    from {
        transform: scaleY(1);
    }

    to {
        transform: scaleY(0.2);
    }
}

.soundBar {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;

    &:hover {
        .soundBar_line {
            animation-play-state: paused;
            opacity: 0.5;
        }
    }

    &_line {
        transform-origin: center;
        width: 3px;
        height: 25px;
        margin: 0 1px;
        animation-name: animation;
        animation-delay: 0.7s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transition: opacity 0.3s ease;
        background-color: #FF434D;
      
        &:nth-child(1) {
            animation-duration: 0.47s;
        }
      
        &:nth-child(2) {
            animation-duration: 0.43s;
        }
      
        &:nth-child(3) {
            animation-duration: 0.4s;
        }
      
        &:nth-child(4) {
            animation-duration: 0.45s;
        }
      
        &:nth-child(5) {
            animation-duration: 0.43s;
        }
      
        &:nth-child(6) {
            animation-duration: 0.42s;
        }
    }
}
`

export default { Component, htmlStructure, cssStyles, scssStyles }
