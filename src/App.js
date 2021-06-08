import "./App.css";
// import Calculator from "./components/boil/Calculator";
import StateLifting from "./components/state-lifting/one"
function App() {
  return (
    <div className="App">
		{/* Temperature Converter - State Lifting 1 */}
      {/* <Calculator /> */}
	  
		{/* TodoList - State Lifting 2 */}
		<StateLifting />
    </div>
  );
}

export default App;
