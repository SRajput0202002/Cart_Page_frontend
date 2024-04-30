
import { useState } from "react";
export default function Counter() {
  const [Count, setCount] = useState(0);
  function Increment() {
    setCount(Count + 1);
  }
  function Decrement() {
    setCount(Count - 1);
  }
  return (
    <div>
      <h1>Const Value is :{Count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
