import React, { useState, useMemo, useEffect, useCallback } from "react";

export default function MemoComponent() {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [name, setName] = useState("");

  const displayName = useCallback(
    (greeting) => {
      return greeting + " " + name;
    },
    [name]
  );
  return (
    <>
      <h1>
        Factorial of {counter} is: {result}
      </h1>

      <div>
        <button onClick={() => setCounter(counter + 1)}> + Increment </button>
        <button onClick={() => setCounter(counter - 1)}> - Decrement </button>
      </div>

      <hr></hr>
      <p>Enter Name:</p>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <hr></hr>
      <DisplayName displayName={displayName}></DisplayName>
    </>
  );
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
  }, [displayName]);

  return <p>{`My name is: ${value}`}</p>;
};

function factorial(n) {
  if (n < 0) {
    return -1;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
