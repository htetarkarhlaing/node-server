import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <input
      type="submit"
      className="w-full block h-10 my-2 rounded-sm outline-none bg-white backdrop-blur-sm hover:bg-opacity-10 font-semibold text-gray-700 hover:text-gray-200"
      value={children}
    />
  );
};

export default Button;
