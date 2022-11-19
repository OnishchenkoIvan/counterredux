import React, { ChangeEvent, useState } from "react";
import { UniversalButton } from "../UniversalButton/UniversalButton";
import s from "./Setter.module.css";
import { UniversalInput } from "../UniversalInput/UniversalInput";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../bll/store";
import {
  setErrorAC,
  setMaxValueAC,
  setMinValueAC,
} from "../../bll/set-reducer";
import { resetValueAC } from "../../bll/counter-reducer";

export const Setter = () => {
  const dispatch = useDispatch();

  const maxValue = useSelector<AppStateType, number>(
    (state) => state.setter.countMax
  );
  const startValue = useSelector<AppStateType, number>(
    (state) => state.setter.countStart
  );

  // let startValue: number, maxValue: number;
  // const [error, setError] = useState<string | null>(null);

  // const [maxValue, setMaxValue] = useState<number>(0);
  // const [startValue, setStartValue] = useState<number>(0);

  const onClickSetter = () => {
    if (!Number.isInteger(startValue) || !Number.isInteger(maxValue)) {
      dispatch(setErrorAC("Value must be ceil number"));
    } else {
      localStorage.setItem("startValue", JSON.stringify(startValue));
      localStorage.setItem("maxValue", JSON.stringify(maxValue));
      dispatch(resetValueAC(startValue));
      // dispatch(setMaxValueAC(maxValue));
      // dispatch(setMinValueAC(startValue));
    }
  };

  const disabledSetter = (): boolean => {
    if (maxValue <= startValue) {
      dispatch(setErrorAC("Incorrect start or max value"));
      return true;
    }
    if (maxValue === null || startValue === null) {
      dispatch(setErrorAC("Incorrect start or max value"));
      return true;
    }
    if (maxValue <= 0 || startValue < 0) {
      dispatch(setErrorAC("Value must be above zero"));
      return true;
    }
    return false;
  };

  const handleChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setErrorAC(""));
    const value = Number(e.currentTarget.value);
    dispatch(setMaxValueAC(value));
  };

  const handleChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setErrorAC(""));
    const value = Number(e.currentTarget.value);
    dispatch(setMinValueAC(value));
  };

  const blocked = disabledSetter() ? `${s.blocked}` : "";

  return (
    <div className={s.container}>
      <div className={"buttons"}>
        <div className={s.inputs}>
          <span>
            max value:
            <UniversalInput
              type="number"
              placeholder="max value"
              onChange={handleChangeMaxValue}
              className={blocked}
            />
          </span>
          <span>
            start value:
            <UniversalInput
              type="number"
              placeholder="start value"
              onChange={handleChangeStartValue}
              className={blocked}
            />
          </span>
        </div>
        <div className={s.button}>
          <UniversalButton
            title={"Set"}
            onClickHandler={onClickSetter}
            disabled={disabledSetter()}
          ></UniversalButton>
        </div>
      </div>
      {/*{error && <span style={{ color: "red" }}>{error}</span>}*/}
    </div>
  );
};
