import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/favicon.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between flex-wrap items-center bg-cyan-50 h-[120px] md:h-[80px]">
      <div className="flex justify-center w-full md:w-auto">
        <Link to="/" className="p-4 flex items-center">
          <img src={logo} alt="Website Logo" />{" "}
          <h4 className="text-lg font-serif font-semibold text-cyan-600 mx-2">
            DEV GLASSES
          </h4>
        </Link>
      </div>
      <div className="p-4 flex justify-center w-full md:w-auto">
        <ul className="flex" id="navitems">
          <li className="nav-item list-none  ">
            <NavLink
              to="/"
              className="p-2 mx-1 rounded"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#90ee90" : "#90ee9000",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item list-none  ">
            <NavLink
              className="p-2 mx-1 rounded"
              to="/allorders"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#90ee90" : "#90ee9000",
                };
              }}
            >
              All Orders
            </NavLink>
          </li>
          <li className="nav-item list-none  ">
            <NavLink
              className="p-2 mx-1 rounded"
              to="/regulardelivery"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#90ee90" : "#90ee9000",
                };
              }}
            >
              Regular Delivery
            </NavLink>
          </li>
          <li className="nav-item list-none  ">
            <NavLink
              className="p-2 mx-1 rounded"
              to="/expressdelivery"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#90ee90" : "#90ee9000",
                };
              }}
            >
              Express Delivery
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
