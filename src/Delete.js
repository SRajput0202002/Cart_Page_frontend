import React from "react";

const listStyle = {
  listStyle: "none",
  marginLeft: "40px",
};
const buttonStyle = {
  padding: "2px",
  margin: "10px",
};
const Delete = (props) => {
  return (
    <div>
      <button style={buttonStyle}>delete</button>
      <li style={listStyle}>{props.text}</li>
    </div>
  );
};

export default Delete;
