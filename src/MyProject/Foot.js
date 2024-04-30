import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import "./Home.css";

const Foot = () => {
  return (
    <div>
      <footer>
        <div className="Footer-main">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Award</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="Footer-sub">
          The href attribute requires a valid value to be accessible. Provide a
          valid, navigable address as the href value. If you cannot provide a
          valid href, but still need the element to resemble a link, use a
          button and change it with appropriate styles. Learn more: address as
          the href value. If you cannot provide a valid href,but still need the
          element to resemble a link, use a button and change it with
          appropriate styles.
        </div>
        <hr />
        <div className="Footer-submain">
          <span>
            <CiFacebook />
          </span>
          <span>
            <CiInstagram />
          </span>
          <span>
            <CiLocationOn />
          </span>
          <span>
            <CiLinkedin />
          </span>
          <span>
            <IoIosCall />
            +111000
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
