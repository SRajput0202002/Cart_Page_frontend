import React from "react";
import { useReducer } from "react";

const reducer = (action) => {
  switch (action) {
    case "a":
      return "this is vowel A";
    case "e":
      return "this is vowel E";
    case "i":
      return "this is vowel I";
    case "o":
      return "this is vowel O";
    case "u":
      return "this is vowel U";

    default:
      return "not a vowel";
  }
};

const Reducer2 = () => {
  const [count, dispatch] = useReducer(reducer);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("a")}>Addition </button>
      <br />
      <button onClick={() => dispatch("e")}>Subtraction</button>
      <br />
      <button onClick={() => dispatch("i")}>multiplication</button>
      <br />
      <button onClick={() => dispatch("o")}>multiplication</button>
      <br />
      <button onClick={() => dispatch("u")}>multiplication</button>
      <br />
      <button onClick={() => dispatch("reload")}>reload</button>
      <br />
    </div>
  );
};

export default Reducer2;
