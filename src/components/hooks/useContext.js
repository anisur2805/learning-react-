import React, { useState } from "react";
import CComponent from "./CComponent";
import FComponent from "./FComponent";
import { CounterContext } from "./CounterContext";

export default function ContextComponent() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <h1>UseContext Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>

      <CounterContext.Provider value={counter}>
        <FComponent />
        <hr></hr>
        <CComponent />
      </CounterContext.Provider>
    </div>
  );
}
