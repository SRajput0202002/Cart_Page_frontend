import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./cartSlice";

const btnStyle = {
  padding: "10px",
  fontSize: "14px",
  fontWeight: "700",
  borderRadius: "5px",
  color: "#fff",
  background: "#111",
  width: "100px",
};

const btnContainer = {
  padding: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px",
};

const Body = () => {
  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItem("sandwitch"));
  };

  const handleRemoveItems = () => {
    dispatch(removeItem());
  };

  const handleClearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div style={btnContainer}>
      <button style={btnStyle} onClick={handleAddItems}>
        AddItem
      </button>
      <button style={btnStyle} onClick={handleRemoveItems}>
        RemoveItem
      </button>
      <button style={btnStyle} onClick={handleClearItems}>
        Clear All
      </button>
    </div>
  );
};

export default Body;
