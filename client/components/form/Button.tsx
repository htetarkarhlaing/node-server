import React from "react";

type ButtonProps = {
  children: string;
  disabled: boolean;
};

const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <input
      type="submit"
      disabled={disabled}
      className="w-full block h-10 rounded-sm outline-none bg-white backdrop-blur-sm hover:bg-opacity-10 font-semibold text-gray-700 hover:text-gray-200 cursor-pointer"
      value={children}
    />
  );
};

export default Button;
