import { useReducer } from "react";

//code duplication way
// const counterReducer = (state, action) => {
//   if (action === "increse_counter") {
//     return state + 1;
//   } else if (action === "decrese_countr") {
//     return state > 20 ? state - 1 : state;
//   }
// };

//advance way

const counterReducer = (state, action) => {
  switch (action) {
    case "increse_counter": {
      return state + 1;
    }
    case "decrese_countr": {
      return state > 20 ? state - 1 : state;
    }
  }
};

const App = () => {
  const [count, dispatch] = useReducer(counterReducer, 20);
  return (
    <div className="Container">
      <h2>Count ={count}</h2>
      <button onClick={() => dispatch("increse_counter")}>Increased + 1</button>
      <button onClick={() => dispatch("decrese_countr")}>Decreased - 1</button>
    </div>
  );
};
export default App;
