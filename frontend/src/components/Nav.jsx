import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="px-4 md:px-6 lg:px-8 h-20 flex justify-between items-center bg-white/95 backdrop-blur-md text-gray-900 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold">
        <NavLink to="/" className="hover:opacity-80 transition-opacity duration-200">
          <span className="text-gradient" style={{ fontFamily: "Limelight" }}>
            STOCKER
          </span>
        </NavLink>
      </div>
      <div className="flex items-center space-x-1 md:space-x-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
              isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
            }`
          }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
              isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
            }`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
