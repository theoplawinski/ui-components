import css from "./Wrapper.module.scss";
import { ReactNode } from "react";
import { merge } from "../../lib/arrayUtils";

interface IProps {
  className?: string;
  children?: ReactNode;
}

export default function Wrapper(props: IProps) {
  return <div className={merge([css.root, props?.className])}>{props?.children}</div>;
}
