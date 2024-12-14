/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const CustomInput = ({
  placeholder,
  type = "text",
  isUser,
  isEmail,
  isPassword,
  value,
  onChange
}) => {
  const iconCustomStyle = "size-6 text-black cursor-pointer ";

  const [isSecure, setIsSecure] = useState(true);
  const [inputType, setInputType] = useState(type);

  const handleToggleVisibility = () => {
    setIsSecure((prev) => !prev);
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className=" w-full p-3 flex justify-center items-center rounded-md outline-none border border-solid border-black ">
      <input
        placeholder={placeholder}
        className=" w-full outline-none "
        type={inputType}
        value={value}
        onChange={onChange}
      />

      {isUser && <UserIcon className={iconCustomStyle} />}

      {isEmail && <AtSymbolIcon className={iconCustomStyle} />}

      {isPassword &&
        (!isSecure ? (
          <EyeIcon
            onClick={handleToggleVisibility}
            className={iconCustomStyle}
          />
        ) : (
          <EyeSlashIcon
            onClick={handleToggleVisibility}
            className={iconCustomStyle}
          />
        ))}
    </div>
  );
};

export default CustomInput;
