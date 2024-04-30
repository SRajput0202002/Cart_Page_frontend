import { useState, useEffect } from "react";
import React from "react";

const Local = () => {
  const [userData, setUserData] = useState({ name: "", age: "" });
  const [saveData, setSaveData] = useState();

  useEffect(() => {
    const StoredData = localStorage.getItem("userData");
    if (StoredData) {
      setSaveData(JSON.parse(StoredData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setSaveData(userData);
    alert("Data saved to local storage");
  };

  const handleRetrievefromLocalStorage = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const data = JSON.parse(storedData);
      setUserData(data);
      alert("Data retrieved from session storage");
    } else {
      alert("No Data is found in Local storage ");
    }
  };

  return (
    <div>
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
      <button onClick={handleSaveToLocalStorage}>save to local</button>
      <br />
      <button onClick={handleRetrievefromLocalStorage}>Retrieve data </button>
    </div>
  );
};

export default Local;
