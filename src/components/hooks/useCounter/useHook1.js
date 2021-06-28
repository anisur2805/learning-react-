import React from "react";
import useCounter from "./useCounter";

export default function CustomStateHook() {
  const [value, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>Hello from Custom Use State</h1>
      <h2>{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
