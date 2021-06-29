/* eslint-disable no-unused-vars */
import "./App.css";

// HOC
import ClickCounter from "./components/HOC/1/ClickCounter";
import HoverCounter from "./components/HOC/1/HoverCounter";
import ProductsListWithSearch from "./components/HOC/3/productCard";

import UseSplitPane from "./components/inheritance/test";
import TextInheritance from "./components/inheritance/Text";
import EmojiComposition from "./components/composition/Emoji";
import TextComposition from "./components/composition/TextComposition";
import AccessingElement from "./components/AccessingElement";
import OrderComponent from "./components/state-lifting/three/OrderComponent";
import Calculator from "./components/boil/Calculator";
import StateLifting from "./components/state-lifting/one"
import A from "./components/state-lifting/two/A";

// Hooks
import UseRef from "./components/hooks/useRef";
import UseRef2 from "./components/hooks/useRef2";
import MemoComponent from './components/hooks/useMemo'
import CallbackComponent from "./components/hooks/useCallback";
import ContextComponent from "./components/hooks/useContext";
import UseReducerComponent from "./components/hooks/UseReducer";
import UseReducerComponent2 from "./components/hooks/UseReducer2";
import CustomStateHook from "./components/hooks/useCounter/useHook1";
import CustomStateHook2 from "./components/hooks/useCounter/useHook2";

import CopyComponent from "./components/Copy.jsx";

// Custom Form Hook
import SignUp from "./components/hooks/CustomHook/Signup";

function App() {
  return (
    <div className="App">
      {/* Temperature Converter - State Lifting 1 */}
      {/* <Calculator /> */}

      {/* TodoList - State Lifting 2 */}
      {/* <StateLifting /> */}

      {/* TodoList - State Lifting 3 */}
      {/* <A /> */}

      {/* e-commerce */}
      {/* <OrderComponent /> */}

      {/* Inheritance Component - part 1 */}
      {/* <TextInheritance /> */}

      {/* Composition Component - part 2 - failed */}
      {/* <EmojiComposition> {({  
		  addEmoji }) => <TextComposition addEmoji={addEmoji} />
		 }</EmojiComposition>*/}

      {/* This is an composition example.  */}
      {/* <UseSplitPane /> */}

      {/* Testing useRef */}
      {/* <AccessingElement /> */}

      {/* HOC - 1 */}
      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* HOC - 3 */}
      {/* <br />
      <ProductsListWithSearch /> */}

      {/* <h2>Hello</h2> */}

      {/* UseRef Example */}
      {/* <UseRef />
	  <UseRef2 /> */}

      {/* UseMemo Example */}
      {/* <MemoComponent /> */}

      {/* UseCallback Exm */}
      {/* <CallbackComponent /> */}

      {/* UseContext */}
      {/* <ContextComponent /> */}

      {/* USe Reducer */}
      {/* <UseReducerComponent /> */}
      {/* <UseReducerComponent2 /> */}

      {/* <CustomStateHook />
      {/* <CustomStateHook2 />
	  <useCustomForm /> */}

      {/* <CopyComponent /> */}

      <SignUp />
    </div>
  );
}

export default App;
