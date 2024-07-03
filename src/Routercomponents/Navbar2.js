import React from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <div>
        <nav
          style={{
            display: "flex",
            gap: "30px",
            backgroundColor: "black",
            padding: "20px",
            color: "black",
          }}
        >
          <NavLink
            to="/"
            className={(e) => {
              return e.isActive ? "white" : "";
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/Userpage"}
            className={(e) => {
              return e.isActive ? "white" : "";
            }}
          >
            <li>Userpage </li>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
