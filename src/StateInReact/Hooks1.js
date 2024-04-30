//how to fetch  data from API

import React, { useState, useEffect } from "react";
const Hooks1 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((Response) => Response.json())
      .then((data) => setProducts(data.products))

      .catch((error) => console.log("ERROR", error));
  }, []);
  console.log("Products", products);
  return (
    <div>
      <div className="text-4xl text-center m-2">
        <h1>Fetching Product Details</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Brand</th>
            <th>Category</th>
            //<th>Images</th>
          </tr>
        </thead>

        <tbody>
          {products.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.stock}</td>
                <td>{data.price}</td>
                <td>{data.rating}</td>
                <td>{data.brand}</td>
                <td>{data.category}</td>
                <td>
                  <img
                    src={data.thumbnail}
                    alt="thumbnail undefined"
                    ClassName="w-half h-10"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Hooks1;
