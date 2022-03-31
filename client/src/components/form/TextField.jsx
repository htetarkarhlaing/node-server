import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const TextField = ({
  type,
  icon,
  placeholder,
  value,
  onChange,
  name,
  register,
  required,
  error,
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="w-full py-1">
      <div className="w-full h-10 overflow-hidden relative">
        {icon}
        <input
          {...register}
          tabIndex={0}
          type={inputType}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-full pl-8 rounded-sm outline-none bg-white bg-opacity-10 border border-transparent focus:border-gray-400 placeholder:text-gray-400 text-white text-sm ${
            error ? "border-red-500 animate-pulse text-red-500" : ""
          }`}
          autocomplete="off"
        />
        {type === "password" ? (
          <button type="button" onClick={togglePassword}>
            {inputType === "password" ? (
              <EyeOffIcon className="w-4 h-4 text-gray-500 absolute top-3 right-4" />
            ) : (
              <EyeIcon
                className="w-4 h-4 text-gray-500 absolute top-3 right-4"
                onClick={togglePassword}
              />
            )}
          </button>
        ) : (
          ""
        )}
      </div>
      {error ? (
        <span className="text-red-500 text-xs">{error.message}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextField;
