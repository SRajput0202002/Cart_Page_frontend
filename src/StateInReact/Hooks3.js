//this is an example of useContexthooks😒😒

import React, { useState, createContext, useContext } from "react";
const U = createContext();

function Hooks3() {
  const [name, setName] = useState("SURBHI");

  return (
    <U.Provider value={name}>
      <h1>This is my name</h1>
      <h2>{`Hello ${name}!`}</h2>
      <Component2 />
    </U.Provider>
  );
}
function Component2() {
  const name = useContext(U);
  return (
    <>
      <h2>Component 3</h2>
      <h3>{`Hello ${name} again!`}</h3>
    </>
  );
}
function Component3() {
  const name = useContext(U);
  return (
    <>
      <h2>Component 3</h2>
      <h3>{`Hello ${name} again!`}</h3>
    </>
  );
}

export default Hooks3;
