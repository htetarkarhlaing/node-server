import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

type SelectProps = {
  icon: JSX.Element;
  children: any;
  name: string;
  register: any;
  error: any;
};

const Select = ({ icon, children, name, register, error }: SelectProps) => {
  return (
    <div className="w-full pb-2">
      <div className="relative h-10">
        {icon}
        <select
          {...register}
          className={`w-full h-full appearance-none pl-8 rounded-sm outline-none bg-white bg-opacity-10 border border-transparent placeholder:text-gray-400 text-white text-sm ${
            error
              ? "border-red-500 animate-pulse text-red-500 focus:border-red-500"
              : "focus:border-gray-400"
          }`}
          name={name}
        >
          {children}
        </select>
        <ChevronDownIcon className="w-4 h-4 text-gray-200 absolute top-3 right-4 -z-10" />
      </div>
      {error ? (
        <span className="text-red-500 text-2xs">{error.message}</span>
      ) : (
        <span className="text-red-500 text-2xs"></span>
      )}
    </div>
  );
};

export default Select;
