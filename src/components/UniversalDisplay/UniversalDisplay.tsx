import s from "./UniversalDisplay.module.css";
import { FC } from "react";

type countDisplay = {
  count: number;
  countMax: number;
};

export const UniversalDisplay: FC<countDisplay> = (props) => {
  const { count, countMax } = props;
  return (
    <div className={count === countMax ? s.stop : ""}>
      <div className={s.countDisplay}>{count}</div>
    </div>
  );
};
