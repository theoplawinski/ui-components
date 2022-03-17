import css from "./Wrapper.module.scss";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export default function Wrapper({ children }: IProps) {
  return <div className={css.root}>{children}</div>;
}
