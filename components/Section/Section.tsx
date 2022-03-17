import css from "./Section.module.scss";
import Wrapper from "../Wrapper/Wrapper";

const Section = () => {
  return (
    <section className={css.root}>
      <Wrapper className={css.wrapper}>
        <h1 className={css.title}>Collection of reusable UI Components</h1>
        <ul className={css.grid}>
          <li className={css.gridItem}>1</li>
          <li className={css.gridItem}>1</li>
          <li className={css.gridItem}>1</li>
          <li className={css.gridItem}>1</li>
          <li className={css.gridItem}>1</li>
          <li className={css.gridItem}>1</li>
          <li className={css.gridItem}>1</li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Section;
