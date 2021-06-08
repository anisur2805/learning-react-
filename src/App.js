import "./App.css";
import OrderComponent from "./components/state-lifting/three/OrderComponent";
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
		<OrderComponent />
    </div>
  );
}

export default App;
