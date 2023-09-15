import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <Link to="/">
          <span className="logo">
            <span style={{ color: "black" }}>V</span>-Bookings
          </span>{" "}
        </Link>
        <div className="navitems">
          <button className="navbutton">Register</button>

          <button className="navbutton">Log-in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
