import "./Navbar.css";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow_icon.png";
import { useContext, useState } from "react";
Link;
import { CoinContext } from "../Context/CoinContext";
import { symbol } from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ onSignUpClick }) => {
  const { setCureency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCureency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCureency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCureency({ name: "inr", symbol: " ₹" });
        break;
      }
      case "bd": {
        setCureency({ name: "tk", symbol: "  ৳" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="" className="logo" />
      </Link>

      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>

        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button onClick={onSignUpClick}>
          Sign Up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
