import css from "./Grid.module.scss";
import { merge } from "../../lib/arrayUtils";

interface IProps {
  className?: string;
}

export default function Grid(props: IProps) {
  return (
    <ul className={merge([css.root, props?.className])}>
      <li className={css.gridItem}>1</li>
      <li className={css.gridItem}>2</li>
      <li className={css.gridItem}>3</li>
      <li className={css.gridItem}>4</li>
      <li className={css.gridItem}>5</li>
      <li className={css.gridItem}>6</li>
      <li className={css.gridItem}>7</li>
      <li className={css.gridItem}>8</li>
      <li className={css.gridItem}>9</li>
      <li className={css.gridItem}>10</li>
      <li className={css.gridItem}>11</li>
      <li className={css.gridItem}>12</li>
      <li className={css.gridItem}>13</li>
      <li className={css.gridItem}>14</li>
      <li className={css.gridItem}>15</li>
      <li className={css.gridItem}>16</li>
      <li className={css.gridItem}>17</li>
      <li className={css.gridItem}>18</li>
    </ul>
  );
}
