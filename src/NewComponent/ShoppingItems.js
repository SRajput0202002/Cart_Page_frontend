import React from "react";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingItems = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, src, alt, price } = item;
  return (
    <div className="container mt-5 ">
      <Link to={`/ItemDetails/${id}`}>
        <div className="bg-gray-300 h-[400px] rounded-2xl flex shadow-2xl items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="w-[300px]  h-[300px] rounded-3xl shadow-2xl"
          ></img>
        </div>
      </Link>

      <div className="mt-6 flex justify-between items-center px-4">
        <div>
          <div className="text-sm font-bold mb-3">{name}</div>
          <div className="text-xl font-bold ">Rs.{price}</div>
        </div>
        <button
          className="btn shadow-2xl bg-gray-300 p-3 hover:bg-gray-600 text-white rounded-3xl  transition-colors"
          onClick={() => dispatch(add(item))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingItems;
