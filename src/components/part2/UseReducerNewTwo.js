import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerNewTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count - {count.firstCounter}</h2>
      <button
        className="btn btn-secondary mx-2 my-1"
        onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1 times
      </button>
      <button
        className="btn btn-primary mx-2 my-1"
        onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1 times
      </button>
      <button
        className="btn btn-secondary mx-2 my-1"
        onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5 times
      </button>
      <button
        className="btn btn-primary mx-2 my-1"
        onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5 times
      </button>

      <button
        className="btn btn-info mx-2 my-1"
        onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};
export default UseReducerNewTwo;
