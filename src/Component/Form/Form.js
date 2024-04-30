import { useState } from "react";
export default function Form() {
  const [nickName, setnickName] = useState("subhhu");

  const [Form, setForm] = useState({
    nickName: "",
  });
  const Manage = (e) => {
    setForm({
      ...Form,
      [e.target.nickName]: e.target.value,
    });
  };

  const ManageForm = (e) => {
    e.preventDefault();
    setnickName([...nickName, Form]);
    setForm({
      nickName: "",
    });
  };
  return (
    <>
      <h1>My Form</h1>
      <hr></hr>
      <input
        type="text"
        placeholder="nickName"
        onChange={ManageForm}
        name="nickname"
        value={Form.nickName}
      />
      <button type="submit">Save</button>
    </>
  );
}
