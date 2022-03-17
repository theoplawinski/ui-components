import css from "./Footer.module.scss";
import Wrapper from "../Wrapper/Wrapper";

const Footer = () => {
  return (
    <footer className={css.root}>
      <Wrapper className={css.wrapper}>
        <p className={css.text}>
          Built by{" "}
          <a
            className={css.externalLink}
            href="https://theoplawinski.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Theo Plawinski
          </a>
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
