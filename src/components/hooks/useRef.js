import React, { useState, useRef } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const inputEle = useRef("");
  const resetInput = () => {
    setName("")
    inputEle.current.focus();
  };

  return (
    <div>
      <input
        ref={inputEle}
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetInput}>Reset Value</button>
	  <br/>
	  <br/>
	  <div>My name is {name}</div>	
    </div>
  );
}

export default UseRef;