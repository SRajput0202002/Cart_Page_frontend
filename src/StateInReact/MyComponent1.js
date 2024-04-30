//To know the window size using event Listener

import React, { useState, useeffect } from "react";
function MyComponent1() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  window.addEventListener("resize", handleResize);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <>
      <p>Window Width:{width}px</p>
      <p>Window Height:{height}px</p>
    </>
  );
}
export default MyComponent1;
