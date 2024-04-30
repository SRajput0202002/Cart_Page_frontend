import React, { useState } from "react";

const Session1 = () => {
  const [userData, setUserData] = useState({ name: "", age: "" });

  console.log("userData", userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveToSessionStorage = () => {
    sessionStorage.setItem("userData", JSON.stringify(userData));
    alert("Data saved to session storage");
    
  };

  const handleRetrievefromSessionStorage = () => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      const data = JSON.parse(storedData);
      setUserData(data);
      alert("Data retrieved from session storage");
    } else {
      alert("No Data is found in session storage ");
    }
  };
  return (
    <div>
      {" "}
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={userData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button onClick={handleSaveToSessionStorage}>save to session</button>
      <br />
      <button onClick={handleRetrievefromSessionStorage}>Retrieve data </button>
    </div>
  );
};

export default Session1;
