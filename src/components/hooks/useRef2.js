import React, { useState, useRef, useEffect } from "react";

function UseRef() {
  const [counter, setCounter] = useState(0);
  const previousCounterRef = useRef(0);

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <h1>Random Counter: {counter}</h1>
	  {typeof previousCounterRef.current !== "undefined" && (
		  <h2>Previous Counter: {previousCounterRef.current}</h2>
	  )}
	  
	  <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100 ))}>Generate Random Number</button>
    </div>
  );
}

export default UseRef;
