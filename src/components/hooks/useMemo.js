import React, { useState, useMemo } from "react";

export default function MemoComponent() {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [name, setName] = useState("");
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
      <DisplayName name={name}></DisplayName>
    </>
  );
}

const DisplayName = React.memo(({ name }) => {
  console.log("Render");
  return <p>{`My name is: ${name}`}</p>;
});

function factorial(n) {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
