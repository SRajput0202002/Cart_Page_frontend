import React from "react";
import { useParams } from "react-router-dom";
import items from "./giftImageData.json";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
// import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const { name, price, src, alt } = item;
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {/* <Link to="/">
        {" "}
        <HiChevronLeft className="h-[40px] w-[45px]" />
      </Link> */}

      <div className="lg:flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className=" rounded-2xl shadow-2xl lg:w-[20rem] md:w-[15rem] w-[10rem] m-20"
        />
        <div>
          <div className="text-3xl font-extrabold mb-4">{name}</div>
          <div className="mb-4">Rs.{price}</div>
          <p className="max-w-[400px] mb-4">
            These are the best gifts from our collections. You can explore as
            much you want and also buy that one. There is{" "}
            <b className="text-xl">50%</b> discounts on first order and{" "}
            <b className="text-xl">free delivery</b>. Our service is best than
            all others. We are providing different varieties of Gifts in our
            platforms.
          </p>
          <button
            className="shadow-2xl bg-gray-400 p-3 hover:bg-gray-600 text-white rounded-3xl  transition-colors"
            onClick={() => dispatch(add(item))}
          >
            Add to Cart
          </button>
          <Link to="/">
            <button className="shadow-2xl bg-gray-400 p-3 hover:bg-gray-600 text-white rounded-3xl m-2 transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
