import React from "react";
import "./Pages.css";
import ram_img from "./Photos/ram_img.jpg";
import { useNavigate } from "react-router-dom";

const Shop = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="Shop-Main-div">
      <h2 className="Shop-title">
        Choose the best option for you from our Shop
      </h2>

      <div className=" flex w-full h-full">
        <div className="grid grid-cols-3 px-8 gap-8">
          {data.map((item, idx) => {
            return (
              <div className=" shadow-2xl text-center rounded-2xl object-contain p-2 w-[400px] h-[470px]">
                <img
                  className="mt-4 rounded-xl w-96 px-6 h-80"
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                />
                <div className="text-xl font-semibold mb-2">{item.name}</div>
                <div className="text-xl font-semibold mb-2">
                  Rs.{item.Price}
                </div>
                <div>
                  {" "}
                  <button
                    className="px-4 py-1 font-semibold mb-2 bg-slate-400 rounded-xl"
                    onClick={() => navigate(`/surbhi/${123}`)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
