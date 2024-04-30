import React, { useContext } from "react";
import MyContext from "./MyContext";
import MyForm3 from "./MyForm3";

function MyForm2() {
  const { MyData, setMydata } = useContext(MyContext);
  const handleEmail = (e) => {
    setMydata({ ...MyData, email: e.target.value });
  };
  return (
    <div>
      <h1>Form 2</h1>
      <input
        type="text"
        placeholder="Your Email"
        value={MyData.email}
        onChange={handleEmail}
      />
      <br></br>
      <MyForm3 />
    </div>
  );
}
export default MyForm2;
