import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "30px",
          backgroundColor: "lightgrey",
          padding: "20px",
          color: "black",
        }}
      >
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        >
          <li>home</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/login"
        >
          <li>login</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/user"
        >
          <li>user</li>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
