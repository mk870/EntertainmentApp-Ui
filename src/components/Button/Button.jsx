import React from "react";
import { ButtonField } from "./ButtonStyles";

const Button = ({ buttonText, onClickFunc }) => {
  return <ButtonField onClick={onClickFunc}>{buttonText}</ButtonField>;
};

export default Button;
