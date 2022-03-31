import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Select = ({ icon, children, value, onChange, name }) => {
  return (
    <div className="relative w-full my-1 h-10">
      {icon}
      <select
        className="w-full h-full pl-8 rounded-sm appearance-none outline-none bg-white bg-opacity-10 border border-transparent focus:border-gray-400 placeholder:text-gray-400 text-white text-sm z-10"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value={0}>-- select one --</option>
        {children}
      </select>
      <ChevronDownIcon className="w-4 h-4 text-gray-200 absolute top-3 right-4" />
    </div>
  );
};

export default Select;
