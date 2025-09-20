import { useReducer } from "react";

//More useable way using useReducer Hook
import counterReducer from "./counterReducer.jsx";
const App = () => {
  const [count, dispatch] = useReducer(counterReducer, 20);
  return (
    <div className="Container">
      <h1>React Counter with Increment & Decrement</h1>

      <h2>Count ={count}</h2>
      <button onClick={() => dispatch({ type: "increse_counter", payload: 1 })}>
        Increased + 1
      </button>
      <button onClick={() => dispatch({ type: "decrese_countr", payload: 1 })}>
        Decreased - 1
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increse_counter", payload: 5 })}>
        Increased + 5
      </button>
      <button onClick={() => dispatch({ type: "decrese_countr", payload: 5 })}>
        Decreased - 5
      </button>
      <br />
      <button
        onClick={() => dispatch({ type: "increse_counter", payload: 10 })}
      >
        Increased + 10
      </button>
      <button onClick={() => dispatch({ type: "decrese_countr", payload: 10 })}>
        Decreased - 10
      </button>
      <br />
    </div>
  );
};
export default App;

//code duplication way
// const counterReducer = (state, action) => {
//   if (action === "increse_counter") {
//     return state + 1;
//   } else if (action === "decrese_countr") {
//     return state > 20 ? state - 1 : state;
//   }
// };

//advance way interms of uppercode

// const counterReducer = (state, action) => {
//   switch (action) {
//     case "increse_counter": {
//       return state + 1;
//     }
//     case "decrese_countr": {
//       return state > 20 ? state - 1 : state;
//     }
//     case "increse_counter5": {
//       return state + 5;
//     }
//     case "decrese_countr5": {
//       return state > 20 ? state - 5 : state;
//     }
//   }
// };
