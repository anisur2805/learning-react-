import React, { useContext } from "react";
import { CounterContext } from "./index";

const ComponentC = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <h4>Count - {counterContext.countState}</h4>
      <button
        className="btn btn-secondary mx-2"
        onClick={() => counterContext.countDispatch("increment")}>
        Increment
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => counterContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button
        className="btn btn-info mx-2"
        onClick={() => counterContext.countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default ComponentC;
