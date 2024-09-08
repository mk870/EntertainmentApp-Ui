import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import { secondaryThemeColor } from "../../Css/Variables";
import * as styled from "./InputFieldStyles";

const InputField = ({
  label,
  onChangeFunc,
  inputValue,
  isSearch,
  handleOnKeyEnter,
  backgroundColor,
  hasFloatingLabel,
}) => {
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
  const handleKeyDown = (eventValue) => {
    if (eventValue === "Enter" && handleOnKeyEnter !== null) handleOnKeyEnter();
    setHovered(true);
  };
  useEffect(() => {
    if (inputValue === "") setHovered(false);
  }, [inputValue]);

  const passwordVisibility = (label) => {
    if (label.toLowerCase() === "password") {
      if (showPassword) return undefined;
      else return "password";
    } else return undefined;
  };

  return (
    <styled.InputContainer>
      {hasFloatingLabel && (
        <styled.InputLabel hovered={hovered} backgroundColor={backgroundColor}>
          {label}
        </styled.InputLabel>
      )}
      {label.toLowerCase() === "password" &&
        (showPassword ? (
          <BsEyeSlash
            className="input-icon"
            fontSize={22}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <BsEye
            className="input-icon"
            fontSize={22}
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
      {isSearch && (
        <FiSearch
          fontSize={22}
          color={secondaryThemeColor}
          className="input-icon"
        />
      )}
      <styled.Input
        onChange={(e) => onChangeFunc(e.target.value)}
        value={inputValue}
        spellCheck="false"
        autoFocus={false}
        autoCorrect="off"
        autoComplete="off"
        placeholder={hasFloatingLabel ? undefined : label}
        type={passwordVisibility(label)}
        onMouseEnter={() => setHovered(true)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        onKeyUp={handleKeyUp}
        onMouseLeave={handleMouseLeave}
        backgroundColor={backgroundColor}
        hasFloatingLabel={hasFloatingLabel}
      />
    </styled.InputContainer>
  );
};

export default InputField;
