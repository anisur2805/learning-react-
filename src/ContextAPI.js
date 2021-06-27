import { useState } from "react";

import Header from "./components/context/Header";
import Main from "./components/context/MainWithFunction";
import ThemeContext from "./components/context/ThemeContext";

function ContextAPI() {
  const themeHook = useState("light");

  return (
    <div className="App">
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
export default ContextAPI;
