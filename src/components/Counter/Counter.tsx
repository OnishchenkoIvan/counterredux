import React from "react";
import { UniversalDisplay } from "../UniversalDisplay/UniversalDisplay";
import { UniversalButton } from "../UniversalButton/UniversalButton";
import s from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../bll/store";
import { incValueAC, resetValueAC } from "../../bll/counter-reducer";

export const Counter = () => {
  const dispatch = useDispatch();
  const startValueFromLocalStorage = JSON.parse(
    localStorage.getItem("startValue") || "0"
  );
  const maxValueFromLocalStorage = JSON.parse(
    localStorage.getItem("maxValue") || "5"
  );

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
  console.log({ count, countMax });
  return (
    <div>
      <div className={s.container}>
        <div className={s.count}>
          {!error ? (
            <UniversalDisplay
              count={count}
              countMax={maxValueFromLocalStorage}
            />
          ) : (
            <span>{error}</span>
          )}
        </div>
        <div className={s.buttons}>
          <UniversalButton
            onClickHandler={Increment}
            disabled={count === maxValueFromLocalStorage}
            title="Increment"
          ></UniversalButton>
          <UniversalButton
            onClickHandler={Reset}
            title="Reset"
            disabled={count === startValueFromLocalStorage}
          ></UniversalButton>
        </div>
      </div>
    </div>
  );
};
