import "./App.css";
// import UseSplitPane from "./components/inheritance/test";
import TextInheritance from "./components/inheritance/Text";
import EmojiComposition from "./components/composition/Emoji";
import TextComposition from "./components/composition/TextComposition";
// import AccessingElement from "./components/AccessingElement";
// import OrderComponent from "./components/state-lifting/three/OrderComponent";
// import Calculator from "./components/boil/Calculator";
// import StateLifting from "./components/state-lifting/one"
// import A from "./components/state-lifting/two/A";

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
      <TextInheritance />

      {/* Composition Component - part 2 */}
      <EmojiComposition> {({ 
		  addEmoji }) => <TextComposition addEmoji={addEmoji} />
		 }</EmojiComposition>

      {/* This is an composition example.  */}
      {/* <UseSplitPane /> */}

      {/* Testing useRef */}
      {/* <AccessingElement /> */}
    </div>
  );
}

export default App;
