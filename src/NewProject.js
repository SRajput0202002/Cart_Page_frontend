import React, { useState } from "react";

const List_Style = {
  display: "flex",
  marginLeft: "10px",
  color: "white",
};
const btnStyle = {
  height: "20px",
  width: "60px",
  marginTop: "25px",
  marginLeft: "20px",
};

const main_div = {
  width: "100%",
  height: "100vh",
  background: "lightGreen",
  display: "flex",
  flexDirection: " row",
  justifyContent: "center",
  alignItems: " center",
  textAlign: "center",
};
const center_div = {
  backgroundColor: "orange",
  display: "inline-block",
  justifyContent: "center",
  width: "30%",
  height: "500px",
  borderRadius: "20px",
};

const updateInputStyle = {
  height: "20px",
  width: "150px",
  marginTop: "20px",
  marginLeft: "12px",
};

const AddInputStyle = {
  height: "20px",
  width: "150px",
  marginTop: "20px",
  marginLeft: "12px",
};

const AddBtnStyle = {
  height: "20px",
  width: "50px",
  marginTop: "20px",
  marginLeft: "20px",
};

function NewProject() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [updateInput, setUpdateInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    setList([...list, input]);
    setInput("");
  };

  const handleDeleteClick = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleUpdateClick = (index) => {
    setEditIndex(index);
    setUpdateInput(list[index]);
  };

  const handleSaveClick = () => {
    if (editIndex !== null && updateInput !== "") {
      const updatedList = [...list];
      updatedList.splice(editIndex, 1, updateInput);
      setList(updatedList);
      setEditIndex(null);
      setUpdateInput("");
    }
  };

  return (
    <div style={main_div}>
      <div style={center_div}>
        <h1>New Project :</h1>
        <input
          style={AddInputStyle}
          placeholder="add an item"
          type="text"
          value={input}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button style={AddBtnStyle} onClick={handleButtonClick}>
          Add
        </button>

        {list.map((item, index) => (
          <div style={List_Style} key={index} id={index}>
            <h2>{index + 1}.</h2>
            {editIndex === index ? (
              <>
                <input
                  style={updateInputStyle}
                  type="text"
                  value={updateInput}
                  onChange={(e) => setUpdateInput(e.target.value)}
                />
                <button style={btnStyle} onClick={handleSaveClick}>
                  Save
                </button>
              </>
            ) : (
              <>
                <h2>{item}</h2>
                <button
                  style={btnStyle}
                  onClick={() => handleDeleteClick(index)}
                >
                  Delete
                </button>
                <button
                  style={btnStyle}
                  onClick={() => handleUpdateClick(index)}
                >
                  Update
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProject;
