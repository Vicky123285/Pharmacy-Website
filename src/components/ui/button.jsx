import React from "react";

const Button = ({ onClick, children, isActive }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-xl shadow-lg transition font-semibold text-base lg:text-lg tracking-wide 
      ${isActive ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-pink-500 hover:text-white"} 
      focus:ring-2 focus:ring-pink-400 focus:outline-none`}
  >
    {children}
  </button>
);

export default Button;