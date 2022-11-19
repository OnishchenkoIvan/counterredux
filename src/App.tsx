import React, { useEffect, useState } from "react";
import "./App.css";
import { Setter } from "./components/Setter/Setter";
import { Counter } from "./components/Counter/Counter";

let maxValue = 5;
let startValue = 0;

function App() {
  const [count, setCount] = useState<number>(startValue);
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
    setCount(count + 1);
  };

  const Reset = () => {
    setCount(startValue);
  };

  return (
    <div className="App">
      <Setter setCount={setCount} setError={setError} />
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
