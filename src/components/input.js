import React from "react";

const Input = ({ type, name, value, placeholder, handleChange }) => {
  return (
    <input
      type={type}
      className="form-control mt-3"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};

export default Input;
