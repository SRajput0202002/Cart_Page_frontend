import React from "react";
import { useSelector } from "react-redux";

const headStyle = {
  textAlign: "center",
  padding: "20px",
  border: "3px solid",
};

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems, "items");
  return (
    <div style={headStyle}>
      <h1>
        <strong>cart :{cartItems.length}</strong>
      </h1>
    </div>
  );
};

export default Header;
