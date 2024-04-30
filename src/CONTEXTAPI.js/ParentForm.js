// import React, {useState } from "react";
// import { MyContext } from "./CONTEXTAPI/MyContext";
// import MyForm1 from "./MyForm1";

// const ParentForm = () => {
//   const { text, setText } = useState([]);

//   const [MyData, setMydata] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSave = (e) => {
//     e.preventDefault();
//     setText([...text, MyData]);
//     setMydata({
//       name: "",
//       email: "",
//       password: "",
//     });
//   };
//   return (
//     <>
//       <MyContext.Provider value={{ MyData, setMydata }}>
//         <form onSubmit={handleSave}>
//           <MyForm1 />
//           <button type="submit">Save</button>
//         </form>
//       </MyContext.Provider>
//     </>
//   );
// };
// export default ParentForm;
import MyContext from "./CONTEXTAPI.js/MyContext";
import React, { useState } from "react";
import MyForm1 from "./CONTEXTAPI.js/MyForm1";

const App = () => {
  const [text, setText] = useState([]);

  const [MyData, setMydata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    setText([...text, MyData]);
    setMydata({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <h1 className="SuperHead">My All Form Details</h1>
      <div className="SuperDiv">
        <div className="MainDiv">
          <MyContext.Provider value={{ MyData, setMydata }}>
            <form onSubmit={handleSave}>
              <MyForm1 />
              <br />
              <button type="submit">Save</button>
            </form>
          </MyContext.Provider>
        </div>
        <div>
          <h2 className="head">My Form Details</h2>
          <table className="table">
            <tr className="table">
              <th className="table">Name</th>
              <th className="table">Email</th>
              <th className="table">Password</th>
            </tr>

            {text.map((data, index) => {
              return (
                <tr className="table" key={index}>
                  <td className="table">{data.name}</td>
                  <td className="table">{data.email}</td>
                  <td className="table">{data.password}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default App;
