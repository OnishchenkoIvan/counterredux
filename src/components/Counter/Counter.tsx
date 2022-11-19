import React from "react";
import { UniversalDisplay } from "../UniversalDisplay/UniversalDisplay";
import { UniversalButton } from "../UniversalButton/UniversalButton";
import s from "./Counter.module.css";

type CounterPropsType = {
  countCurrent: number;
  onClickIncrement: () => void;
  onClickReset: () => void;
  countMax: number;
  countStart: number;
  error: string | null;
};

export const Counter = (props: CounterPropsType) => {
  const {
    countStart,
    countMax,
    countCurrent,
    onClickReset,
    onClickIncrement,
    error,
  } = props;
  return (
    <div>
      <div className={s.container}>
        <div className={s.count}>
          {!error ? (
            <UniversalDisplay count={countCurrent} countMax={countMax} />
          ) : (
            <span>{error}</span>
          )}
          {/*<UniversalDisplay count={countCurrent} countMax={countMax} />*/}
          {/*{error && <span>{error}</span>}*/}
        </div>
        <div className={s.buttons}>
          <UniversalButton
            onClickHandler={onClickIncrement}
            disabled={countCurrent === countMax}
            title="Increment"
          ></UniversalButton>
          <UniversalButton
            onClickHandler={onClickReset}
            title="Reset"
            disabled={countCurrent === countStart}
          ></UniversalButton>
        </div>
      </div>
    </div>
  );
};
