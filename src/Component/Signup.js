import { useState } from "react";

function Signup() {
    const [entryList, setEntry] = useState([]);
  
    const [Form, setForm] = useState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      contact: "",
      dob: "",
      password: "",
      cpassword: "",
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
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          contact: "",
          dob: "",
          password: "",
          cpassword: "",
        });
        console.log(Form);
        console.log(entryList);
      };

      return (
        <>
          <div className="Signup">
            <h3>SIGNUP FORM</h3>
            <div className="formDetails">
              <form action="" onSubmit={handleSubmitForm}>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={handleForm}
                  name="firstname"
                  value={Form.firstname}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={handleForm}
                  name="lastname"
                  value={Form.lastname}
                />
                <br />
                <input
                  type="text"
                  placeholder="UserName"
                  onChange={handleForm}
                  name="username"
                  value={Form.username}
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleForm}
                  name="email"
                  value={Form.email}
                />
                <br />
                <input
                  type="text"
                  placeholder="Contact"
                  onChange={handleForm}
                  name="contact"
                  value={Form.contact}
                />
                <br />
                <input
                  type="date"
                  onChange={handleForm}
                  name="dob"
                  value={Form.dob}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleForm}
                  name="password"
                  value={Form.password}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleForm}
                  name="cpassword"
                  value={Form.cpassword}
                />
                <br />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
          <div className="userInfo">
      <h2>User Info :</h2>
        <table>
          <tr>
            <th>S.No.</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>DOB</th>
            <th>Password</th>
          </tr>
          {entryList.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.dob}</td>
                <td>{data.password}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
export default Signup;