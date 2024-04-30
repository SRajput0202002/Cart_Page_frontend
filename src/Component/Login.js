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
          <button type="submit">Login</button>
          <br></br>
          <br></br>
        </form>
      </div>
      {/* <div className="userInfo">
        <h2>User Info :</h2>
        <table>
          <tr>
            <th>UserName</th>
            <th>Password</th>
          </tr>
          {entryList.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.password}</td>
              </tr>
            );
          })}
        </table>
      </div> */}
    </div>
  );
}
export default Login;
