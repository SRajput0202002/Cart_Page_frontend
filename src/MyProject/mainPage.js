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
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
};

export default mainPage;
