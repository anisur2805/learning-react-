import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
		return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
      <h2>First Count - {count.firstCounter}</h2>
      <h2>Second Count - {count.secondCounter}</h2>
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

      <div>
        <button
          className="btn btn-secondary mx-2 my-1"
          onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Second Counter Increment 1 times
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Second Counter Decrement 1 times
        </button>
      </div>

      <button
        className="btn btn-info mx-2 my-1"
        onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};
export default UseReducerNewTwo;
