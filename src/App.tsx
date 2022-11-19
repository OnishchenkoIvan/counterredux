import React, { useEffect, useState } from "react";
import "./App.css";
import { Setter } from "./components/Setter/Setter";
import { Counter } from "./components/Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./bll/store";
import { incValueAC, resetValueAC } from "./bll/counter-reducer";

let maxValue = 5;
let startValue = 0;

function App() {
  const count = useSelector<AppStateType, number>(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const numberMaxValue = localStorage.getItem("maxValue");
    const numberStartValue = localStorage.getItem("startValue");

    if (numberMaxValue) {
      maxValue = Number(numberMaxValue);
    }
    if (numberStartValue) {
      startValue = Number(numberStartValue);
    }
  }, [count]);

  const Increment = () => {
    dispatch(incValueAC());
  };

  const Reset = () => {
    dispatch(resetValueAC());
  };

  return (
    <div className="App">
      {/*<Setter setCount={setCount} setError={setError} />*/}
      <Counter
        error={error}
        countCurrent={count}
        onClickIncrement={Increment}
        onClickReset={Reset}
        countMax={maxValue}
        countStart={startValue}
      />
    </div>
  );
}

export default App;
