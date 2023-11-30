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
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li>
            <Link to="/list" className="nav-link">Event List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
