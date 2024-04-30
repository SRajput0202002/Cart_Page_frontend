import React from "react";
import "./Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState();
  return (
    <div>
   <p className="head-nav">HERE ARE SPECIAL OFFERS FOR YOU !🤩🤩</p>
      <div className="navbar">
        <div className="nav-logo">
          <p>E-Commerce Site</p>
        </div>

        <ul className="nav-menu">
          <li>
            <NavLink
              to="/Shop"
              onClick={() => {
                setMenu("shop");
              }}
            >
              Shop
            </NavLink>

            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li>
            <NavLink
              to="/Men"
              onClick={() => {
                setMenu("men");
              }}
            >
              Men
            </NavLink>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li>
            <NavLink
              to="/Women"
              onClick={() => {
                setMenu("women");
              }}
            >
              Women
            </NavLink>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li>
            <NavLink
              to="/Kids"
              onClick={() => {
                setMenu("kids");
              }}
            >
              Kids
            </NavLink>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div class="nav-login">
          <button>
            <NavLink to="/Login"> Login</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
