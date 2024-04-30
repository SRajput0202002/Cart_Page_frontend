import React from "react";

const Greeting = () => {
  let currDate = new Date();
  currDate = currDate.getHours();
  const cssStyle = {};

  let greeting = "";
  if (currDate >= 1 && currDate < 12) {
    greeting = " good morning ";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 16) {
    greeting = " good afternoon";
    cssStyle.color = " orange";
  } else if (currDate >= 16 && currDate < 19) {
    greeting = " good evening";
    cssStyle.color = "brown";
  } else {
    greeting = "good night";
    cssStyle.color = "black";
  }

  return (
    <div>
      <h1>
        Hello sir,<span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
};

export default Greeting;
