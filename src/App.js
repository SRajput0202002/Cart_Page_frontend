// import React, { useEffect } from "react";
// import Navbar from "./NewComponent/Navbar";
// import ShoppingContainer from "./NewComponent/ShoppingContainer";
// import CheckOut from "./NewComponent/CheckOut";
// import { useSelector, useDispatch } from "react-redux";
// import { total } from "./NewComponent/State/Slice/CartSlice";
// import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import ItemDetails from "./NewComponent/ItemDetails";
// import "./App.css";

// const Layout = () => {
//   const { isOpen } = useSelector((state) => state.checkout);
//   return (
//     <div>
//       <Navbar />
//       {isOpen && <CheckOut />}
//       <Outlet />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <ShoppingContainer />,
//       },
//       {
//         path: "/ItemDetails/:id",
//         element: <ItemDetails />,
//       },
//     ],
//   },
// ]);
// const App = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(total());
//   }, [cartItems, dispatch]);
//   return (
//     <div className="font-BeVietnamPro">
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Home from "./MyProject/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./MyProject/Men.js";
import Women from "./MyProject/Women.js";
import Kids from "./MyProject/Kids.js";
import Shop from "./MyProject/Shop.jsx";
import Nav from "./MyProject/Nav.js";
import Login from "./MyProject/Login.js";
import Foot from "./MyProject/Foot.js";
import slides from "./MyProject/girlData.json";
import img from "./MyProject/boyImagaData.json";
import gift from "./MyProject/giftImageData.json";
import TestComponent from "./MyProject/TestComponent.js";

const mainPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men data={img} />} />
          <Route path="/Women" element={<Women data={slides} />} />
          <Route path="/Kids" element={<Kids data={img} />} />
          <Route path="/Shop" element={<Shop data={gift} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/surbhi/:xyz" element={<TestComponent />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
};

export default mainPage;
