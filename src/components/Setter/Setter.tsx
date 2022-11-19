import React, { ChangeEvent, useState } from "react";
import { UniversalButton } from "../UniversalButton/UniversalButton";
import s from "./Setter.module.css";
import { UniversalInput } from "../UniversalInput/UniversalInput";

type SetterPropsType = {
  setCount: (value: number) => void;
  setError: (value: string | null) => void;
};

export const Setter = (props: SetterPropsType) => {
  const { setCount, setError } = props;
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);

  const onClickSetter = () => {
    if (!Number.isInteger(startValue) || !Number.isInteger(maxValue)) {
      setError("Value must be ceil number");
    } else {
      localStorage.setItem("startValue", JSON.stringify(startValue));
      localStorage.setItem("maxValue", JSON.stringify(maxValue));
      setCount(startValue);
    }
  };

  const disabledSetter = (): boolean => {
    if (maxValue <= startValue) {
      setError("Incorrect start or max value");
      return true;
    }
    if (maxValue === null || startValue === null) {
      setError("Incorrect start or max value");
      return true;
    }
    if (maxValue <= 0 || startValue < 0) {
      setError("Value must be above zero");
      return true;
    }
    return false;
  };

  const handleChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const value = Number(e.currentTarget.value);
    setMaxValue(value);
  };

  const handleChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const value = Number(e.currentTarget.value);
    setStartValue(value);
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
