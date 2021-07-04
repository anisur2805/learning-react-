import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

// export const CounterContext = createContext();
export const CounterContext = React.createContext(); // same way

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerWithUseContext = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CounterContext.Provider
        value={{ countState: count, countDispatch: dispatch }}>
        <h2>Count - {count}</h2>

        <hr />
        <ComponentA />
        <hr />
        <ComponentB />
        <hr />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  );
};
export default UseReducerWithUseContext;
