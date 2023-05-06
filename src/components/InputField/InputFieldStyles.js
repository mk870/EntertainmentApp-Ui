import styled, { css } from "styled-components";
import {
  inputColor,
  mainThemeColor,
  secondaryThemeColor,
} from "../../Css/Variables";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  .input-icon {
    position: absolute;
    right: 10px;
  }
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.26px;
  color: ${inputColor};
  background-color: ${(props) => props.backgroundColor};
  outline: none;
  margin: 10px 0px 10px 0px;
  border: ${(props) =>
    props.hasFloatingLabel ? `1px solid ${secondaryThemeColor}` : "none"};
  padding-left: 10px;
  &:hover {
    border: ${(props) =>
      props.hasFloatingLabel ? `1px solid ${mainThemeColor}` : "none"};
    background-color: ${(props) => props.backgroundColor};
  }
`;
export const InputLabel = styled.p`
  font-size: 15px;
  position: absolute;
  left: 10px;
  padding: 0px 3px 0px 3px;
  color: ${secondaryThemeColor};
  pointer-events: none;
  background-color: ${(props) => props.backgroundColor};
  transition: all 200ms ease-in-out;
  ${(props) =>
    props.hovered &&
    css`
      color: ${mainThemeColor};
      transform: translateY(-20px);
      z-index: 2;
      background-color: ${(props) => props.backgroundColor};
      padding: 0px 2px 0px 2px;
    `}
`;
