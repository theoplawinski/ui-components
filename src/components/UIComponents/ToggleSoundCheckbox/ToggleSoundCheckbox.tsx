import css from './ToggleSoundCheckbox.module.scss'

const Component = () => {
  return (
    <label className={css.root}>
      <input className={css.input} type="checkbox" />
      <div className={css.marker} />
      <span className={css.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"
          />
        </svg>
      </span>
      <span className={css.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4l3.536 3.536-1.414 1.414L19 13.414l-3.536 3.536-1.414-1.414L17.586 12 14.05 8.464l1.414-1.414L19 10.586l3.536-3.536 1.414 1.414L20.414 12z"
          />
        </svg>
      </span>
    </label>
  )
}

const htmlStructure = `
<label class="switch">
    <input class="switch_checkbox" type="checkbox" />
    <div class="switch_checkmark"></div>
    <span class="switch_icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                fill="currentColor"
                d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"
            />
        </svg>
    </span>
    <span class="switch_icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                fill="currentColor"
                d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4l3.536 3.536-1.414 1.414L19 13.414l-3.536 3.536-1.414-1.414L17.586 12 14.05 8.464l1.414-1.414L19 10.586l3.536-3.536 1.414 1.414L20.414 12z"
            />
        </svg>
    </span>
</label>
`

const cssStyles = `
.switch {
    position: relative;
    width: 70px;
    height: 35px;
    border-radius: 50px;
    background-color: #ff434d;
    overflow: hidden;
    cursor: pointer;
}

.switch_checkbox {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
}

.switch_checkbox:checked ~ .switch_checkmark {
    transform: translateX(0%);
}

.switch_checkbox:checked ~ .switch_icon:nth-child(3) {
    color: #ff434d;
}

.switch_checkbox:checked ~ .switch_icon:nth-child(4) {
    color: #ffffff;
}

.switch_checkmark {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    width: 50%;
    height: 100%;
    border: 4px solid #ff434d;
    border-radius: 50px;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #ffffff;
}

.switch_icon {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    transition: color 0.3s ease;
    will-change: transform;
}

.switch_icon:nth-child(3) {
    color: #ffffff;
}

.switch_icon:nth-child(4) {
    color: #ff434d;
}

.switch_icon svg {
    width: 11px;
    height: 11px;
}
`

const scssStyles = `
.switch {
    position: relative;
    width: 70px;
    height: 35px;
    border-radius: 50px;
    background-color: #ff434d;
    overflow: hidden;
    cursor: pointer;

    &_checkbox {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;

        &:checked ~ .switch_checkmark {
            transform: translateX(0%);
        }

        &:checked ~ .switch_icon {
            &:nth-child(3) {
                color: #ff434d;
            }

            &:nth-child(4) {
                color: #ffffff;
            }
        }
    }

    &_checkmark {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(100%);
        width: 50%;
        height: 100%;
        border: 4px solid #ff434d;
        border-radius: 50px;
        transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        background-color: #ffffff;
    }

    .switch_icon {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        transition: color 0.3s ease;
        will-change: transform;

        &:nth-child(3) {
            color: #ffffff;
        }

        &:nth-child(4) {
            color: #ff434d;
        }

        svg {
            width: 11px;
            height: 11px;
        }
    }
}
`

export default { Component, htmlStructure, cssStyles, scssStyles }
