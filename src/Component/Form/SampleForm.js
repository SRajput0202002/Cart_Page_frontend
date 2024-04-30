import React from "react";
import { useState } from "react";

const SampleForm = () => {
  const [Form, setForm] = useState({
    Name: "",
    Class: "",
    Subject: "",
    School: "",
    Contact: "",
  });
  const handleForm = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      Name: "",
      Class: "",
      Subject: "",
      Contact: "",
    });
  };

  return (
    <div>
      <h1>Student Registration Form</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            onChange={handleForm}
            name="Name"
            value={Form.Name}
          />
          <input
            type="text"
            placeholder="Student Class"
            onChange={handleForm}
            name="Class"
            value={Form.Class}
          />
          <input
            type="text"
            placeholder="Student Subject"
            onChange={handleForm}
            name="Subject"
            value={Form.Subject}
          />
          <input
            type="text"
            placeholder="School Name"
            onChange={handleForm}
            name="School"
            value={Form.School}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SampleForm;
