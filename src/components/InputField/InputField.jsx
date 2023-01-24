import React, { useState } from "react";
import { useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import * as styled from "./InputFieldStyles";

const InputField = ({ label, onChangeFunc, inputValue }) => {
  const [hovered, setHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseLeave = () => {
    if (inputValue === "") {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };
  const handleKeyUp = () => {
    if (inputValue === "") {
      setHovered(false);
    }
  };
  useEffect(() => {
    if (inputValue === "") setHovered(false);
  }, [inputValue]);

  const passwordVisibility = (label) => {
    if(label.toLowerCase() === 'password'){
      if(showPassword) return null
      else return 'password'
    }else return null
  }
  return (
    <styled.InputContainer>
      <styled.InputLabel hovered={hovered}>{label}</styled.InputLabel>
      {label.toLowerCase() === "password" &&
        (showPassword ? (
          <BsEyeSlash
            className="label-password-icon"
            fontSize={22}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <BsEye
            className="label-password-icon"
            fontSize={22}
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
      <styled.Input
        onChange={(e) => onChangeFunc(e.target.value)}
        value={inputValue}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        type={passwordVisibility(label)}
        onMouseEnter={() => setHovered(true)}
        onKeyDown={() => setHovered(true)}
        onKeyUp={handleKeyUp}
        onMouseLeave={handleMouseLeave}
      />
    </styled.InputContainer>
  );
};

export default InputField;
