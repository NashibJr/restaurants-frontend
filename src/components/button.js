import React from "react";

const Button = ({ label, onClickEvent, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClickEvent}
      className={
        label !== "Delete" ? "btn btn-primary  w-100" : "btn btn-danger w-100"
      }
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
