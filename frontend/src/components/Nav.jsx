import React from "react";
import { NavLink } from "react-router";
import { useState } from "react";

const Nav = () => {
  const [name, setName] = useState("Login");

  return (
    <nav className="px-3 h-18 flex justify-between items-center pt-2 shadow-xl pb-2 bg-white text-black sticky top-0">
      <div className="text-xl font-semibold">
        <NavLink to="/">
          <span className="lg:text-3xl" style={{ fontFamily: "Limelight" }}>
            STOCKER
          </span>
        </NavLink>
      </div>
      <div className="flex font-thin md:font-normal text-l">
        <NavLink to="/" className="px-2">
          Home
        </NavLink>
        <NavLink to="/">
          <a href="#about" className="px-2">
            About
          </a>
        </NavLink>
        <NavLink to="/">
          <a href="#contact" className="px-2">
            Contact
          </a>
        </NavLink>
        <NavLink to="/login" className="px-2">
          {name}
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
