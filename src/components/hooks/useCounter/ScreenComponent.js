import React from "react";
import UseScreen from "./useScreen";

const ScreenComponent = () => {
  // screenSize use here
  const screenSize = UseScreen();
  return (
    <div>
      <h1>Screen Component</h1>
      <p>Current screen size is {screenSize}</p>
    </div>
  );
};

export default ScreenComponent;
