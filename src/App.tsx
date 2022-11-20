import React from "react";
import "./App.css";
import { Setter } from "./components/Setter/Setter";
import { Counter } from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Setter />
      <Counter />
    </div>
  );
}

export default App;
