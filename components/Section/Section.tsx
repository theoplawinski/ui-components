import css from "./Section.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import components from "../UIComponents/index";

const Section = () => {
  return (
    <section className={css.root}>
      <Wrapper className={css.wrapper}>
        <h1 className={css.title}>Collection of reusable UI Components</h1>
        <ul className={css.grid}>
          {components.map((item, i) => (
            <li className={css.gridItem} key={i}>
              <item.Component />
              <a
                className={css.gridItemLink}
                href={`https://github.com/theoplawinski/ui-components/tree/dev/components/UIComponents/${item.ComponentName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Section;
