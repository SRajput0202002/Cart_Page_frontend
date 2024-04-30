import React from "react";

const PropDrilling = () => {
  function Grandparent() {
    const message = "Hello from Grandparent";

    return (
      <div>
        <h1>Grandparent Component</h1>
        <Parent message={message} />
      </div>
    );
  }

  function Parent({ message }) {
    return (
      <div>
        <h2>Parent Component</h2>
        <Child message={message} />
      </div>
    );
  }

  function Child({ message }) {
    return (
      <div>
        <h3>Child Component</h3>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div>
      <Grandparent />
    </div>
  );
};

export default PropDrilling;
