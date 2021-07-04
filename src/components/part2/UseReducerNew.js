import React, { useReducer } from "react";

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
const UseReducerNew = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count - {count}</h2>
      <button className="btn btn-secondary mx-2" onClick={() => dispatch("increment")}>Increment</button>
      <button className="btn btn-primary mx-2" onClick={() => dispatch("decrement")}>Decrement</button>
      <button className="btn btn-info mx-2" onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
export default UseReducerNew;
