import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-full h-10 my-1 rounded-sm outline-none bg-white backdrop-blur-sm hover:bg-opacity-10 font-semibold text-gray-700 hover:text-gray-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
