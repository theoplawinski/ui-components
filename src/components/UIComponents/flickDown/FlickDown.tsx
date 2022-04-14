import css from './FlickDown.module.scss'

const Component = () => {
  return (
    <a className={css.root} data-text="Button text">
      <span className={css.text}>Button text</span>
    </a>
  )
}

const htmlStructure = `
<a className="link" href="#" data-text="Button text">
    <span class="link_text">Button text</span>
</a>
`

const cssStyles = `
.link {
    position: relative;
    display: inline-block;
    font-family: sans-serif;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
}

.link::before {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-15px);
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
        opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0;
    pointer-events: none;
    content: attr(data-text);
}

.link:hover::before {
    transform: translateY(0);
    opacity: 1;
}

.link_text {
    display: block;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
        opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    pointer-events: none;
}

.link:hover .link_text {
    transform: translateY(15px);
    opacity: 0;
}
`

const scssStyles = `
.link {
    position: relative;
    display: inline-block;
    font-family: sans-serif;
    font-size: 16px;
    color: #000000;
    cursor: pointer;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-15px);
        display: block;
        width: 100%;
        height: 100%;
        transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        opacity: 0;
        pointer-events: none;
        content: attr(data-text);
    }

    &_text {
        display: block;
        transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        pointer-events: none;
    }

    &:hover {
        &::before {
            transform: translateY(0);
            opacity: 1;
        }

        .link_text {
            transform: translateY(15px);
            opacity: 0;
        }
    }
}
`

export default { Component, htmlStructure, cssStyles, scssStyles }
