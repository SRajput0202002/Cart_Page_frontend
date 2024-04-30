import React from "react";

const name = "Surbhi Singh";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const DateTime = () => {
  const img = "https://picsum.photos/id/237/200/300";
  return (
    <div>
      <h1 contentEditable="true">My name is {name}</h1>
      <p>Today date is {currDate}</p>
      <p>current time is {currTime}</p>
      <img src={img} alt="random images"/>
    </div>
  );
};

export default DateTime;
