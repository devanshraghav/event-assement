import React from "react";
import "./Navbar.css";
import calender from "./calendar.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-elements">
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/list">Event List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
