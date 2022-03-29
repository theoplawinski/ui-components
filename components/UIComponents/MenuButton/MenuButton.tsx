import css from "./MenuButton.module.scss";

const Component = () => {
  return (
    <a className={css.root}>
      <span />
    </a>
  );
};

const ComponentName = "MenuButton";

const UIComponent = {
  Component,
  ComponentName
};

export default UIComponent;
