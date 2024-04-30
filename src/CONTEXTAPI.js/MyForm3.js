import { useContext } from "react";
import MyContext from "./MyContext";
function MyForm3() {
  const { MyData, setMydata } = useContext(MyContext);

  const handlepassword = (e) => {
    setMydata({ ...MyData, password: e.target.value });
  };

  return (
    <div>
      <h2>Form 3</h2>

      <input
        type="password"
        placeholder="Your Password"
        value={MyData.password}
        onChange={handlepassword}
      />
    </div>
  );
}
export default MyForm3;
