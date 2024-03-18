import React from "react";
import { ButtonField } from "./ButtonStyles";

const Button = ({ buttonText, onClickFunc, type, disabled }) => {
  return (
    <ButtonField
      onClick={onClickFunc}
      type={type}
      disabled={disabled === undefined ? false : disabled}
    >
      <span>{buttonText}</span>
    </ButtonField>
  );
};

export default Button;
