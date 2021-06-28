import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const FComponent = () => {
  const value = useContext(CounterContext);
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{value}</h2>
      <hr></hr>
      <FChild />
    </div>
  );
};

const FChild = () => {
  const value = useContext(CounterContext);
  return (
    <div>
      <h1>Functional Child Component</h1>
      <h2>{value}</h2>
    </div>
  );
};

export default FComponent;
