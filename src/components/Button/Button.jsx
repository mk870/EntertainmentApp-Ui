import React from "react";
import { ButtonField } from "./ButtonStyles";

const Button = ({ buttonText, onClickFunc, type }) => {
  return (
    <ButtonField onClick={onClickFunc} type={type}>
      <span>{buttonText}</span>
    </ButtonField>
  );
};

export default Button;
