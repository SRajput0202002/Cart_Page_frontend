import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    case "mult":
      return state * 2;
    default:
      throw new Error("Unexpected action");
  }
};
const Reducer1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>Addition </button>
      <br />
      <button onClick={() => dispatch("sub")}>Subtraction</button>
      <br />
      <button onClick={() => dispatch("mult")}>multiplication</button>
      <br />
      <button onClick={() => dispatch("reload")}>reload</button>
      <br />
    </div>
  );
};

export default Reducer1;
