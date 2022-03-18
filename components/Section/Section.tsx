import css from "./Section.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import components from "../UIComponents/index";

const Section = () => {
  return (
    <section className={css.root}>
      <Wrapper className={css.wrapper}>
        <h1 className={css.title}>Collection of reusable UI Components</h1>
        <ul className={css.grid}>
          {components.map((Component, i) => (
            <li className={css.gridItem} key={i}>
              <Component />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Section;
