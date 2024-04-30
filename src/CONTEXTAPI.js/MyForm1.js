import React, { useContext } from "react";
import MyContext from "./MyContext";
import MyForm2 from "./MyForm2";

function MyForm1() {
  const {MyData, setMydata} = useContext(MyContext);

  const handlename = (e) => {
    setMydata({ ...MyData, name: e.target.value });
  };
  return (
    <div>
      <h1>Form 1</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={MyData.name}
        onChange={handlename}
      />
      <br />
      <MyForm2 />
    </div>
  );
}
export default MyForm1;
