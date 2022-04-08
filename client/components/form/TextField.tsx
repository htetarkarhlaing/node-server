import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

type TextFieldProps = {
  type: string;
  icon: JSX.Element;
  placeholder: string;
  name: string;
  register: any;
  error: any;
};

const TextField = ({
  type,
  icon,
  placeholder,
  name,
  register,
  error,
}: TextFieldProps) => {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="w-full pb-2">
      <div className="w-full h-10 overflow-hidden relative">
        {icon}
        <input
          {...register}
          tabIndex={0}
          type={inputType}
          placeholder={placeholder}
          name={name}
          className={`w-full h-full pl-8 rounded-sm outline-none bg-white bg-opacity-10 border border-transparent placeholder:text-gray-400 text-white text-sm ${
            error
              ? "border-red-500 animate-pulse text-red-500 focus:border-red-500"
              : "focus:border-gray-400"
          }`}
          autoComplete="off"
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
        <span className="text-red-500 text-2xs">{error.message}</span>
      ) : (
        <span className="text-red-500 text-2xs"></span>
      )}
    </div>
  );
};

export default TextField;
