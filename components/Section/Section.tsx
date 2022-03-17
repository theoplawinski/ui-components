import css from "./Section.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import Grid from "../Grid/Grid";

export default function Section() {
  return (
    <section className={css.root}>
      <Wrapper className={css.wrapper}>
        <h1 className={css.title}>Collection of reusable UI Components</h1>
        <Grid className={css.grid} />
      </Wrapper>
    </section>
  );
}
