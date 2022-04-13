import css from './MenuButton.module.scss'

const Component = () => {
  return (
    <div className={css.root}>
      <span className={css.line} />
    </div>
  )
}

const htmlStructure = `
<div class="menu">
    <span class="menu_line"></span>
</div>
`

const cssStyles = `
.menu {
    position: relative;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    cursor: pointer;
}

.menu::before {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.45s cubic-bezier(0.17, 0.67, 0.3, 1.33);
    background-color: #ff434d;
    content: '';
}

.menu:hover::before {
    transform: scale(1.2);
}

.menu_line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 1px;
    border-radius: 50px;
    background-color: #ffffff;
}

.menu_line::before,
.menu_line::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: #ffffff;
    content: '';
}

.menu_line::before {
    top: -4px;
}

.menu_line::after {
    top: 4px;
}
`

const scssStyles = `
.menu {
    position: relative;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    cursor: pointer;

    &::before {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: transform 0.45s cubic-bezier(0.17, 0.67, 0.3, 1.33);
        background-color: #ff434d;
        content: '';
    }

    &:hover::before {
        transform: scale(1.2);
    }

    &_line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 1px;
        border-radius: 50px;
        background-color: #ffffff;

        &::before,
        &::after {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50px;
            background-color: #ffffff;
            content: '';
        }

        &::before {
            top: -4px;
        }

        &::after {
            top: 4px;
        }
    }
}
`

export default { Component, htmlStructure, cssStyles, scssStyles }
