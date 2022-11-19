import React, { useState } from "react";
import { UniversalDisplay } from "../UniversalDisplay/UniversalDisplay";
import { UniversalButton } from "../UniversalButton/UniversalButton";
import s from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../bll/store";
import { incValueAC, resetValueAC } from "../../bll/counter-reducer";

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector<AppStateType, number>(
    (state) => state.counter.value
  );

  const error = useSelector<AppStateType, string>(
    (state) => state.setter.error
  );

  const countMax = useSelector<AppStateType, number>(
    (state) => state.setter.countMax
  );

  const countStart = useSelector<AppStateType, number>(
    (state) => state.setter.countStart
  );

  const Increment = () => {
    dispatch(incValueAC());
  };

  const Reset = () => {
    dispatch(resetValueAC(countStart));
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.count}>
          {!error ? (
            <UniversalDisplay count={count} countMax={countMax} />
          ) : (
            <span>{error}</span>
          )}
        </div>
        <div className={s.buttons}>
          <UniversalButton
            onClickHandler={Increment}
            disabled={count === countMax}
            title="Increment"
          ></UniversalButton>
          <UniversalButton
            onClickHandler={Reset}
            title="Reset"
            disabled={count === countStart}
          ></UniversalButton>
        </div>
      </div>
    </div>
  );
};
