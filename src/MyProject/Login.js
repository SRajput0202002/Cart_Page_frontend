import { useState } from "react";

function Login() {
  const [entryList, setEntry] = useState([]);
  const [Form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleForm = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setEntry([...entryList, Form]);
    setForm({
      username: "",
      password: "",
    });
    console.log(Form);
    console.log(entryList);
  };

  return (
    <div className="main">
      <div className="submain">
        <div className="main1">
          <h2>My Login Form</h2>
          <hr></hr>
        </div>
        <br></br>
        <form action="" onSubmit={handleSubmitForm}>
          <label>UserName</label>
          <br></br>
          <input
            type="text"
            placeholder="UserName"
            onChange={handleForm}
            name="username"
            value={Form.username}
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            onChange={handleForm}
            name="password"
            value={Form.password}
            required
          />
          <br></br>
          <br></br>
          <button type="submit" className="btn-Login">
            Login
          </button>
          <br></br>
          <br></br>
        </form>
      </div>
      <br />
    </div>
  );
}
export default Login;
