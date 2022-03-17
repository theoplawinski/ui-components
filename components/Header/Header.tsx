import css from "./Header.module.scss";
import Wrapper from "../Wrapper/Wrapper";

export default function Header() {
  return (
    <header className={css.root}>
      <Wrapper>Header</Wrapper>
    </header>
  );
}
