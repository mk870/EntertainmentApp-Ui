import styled, { css } from "styled-components";
import { secondaryColor } from "../CssVariables/Index";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width:100%;
  .label-password-icon{
    position: absolute;
    right: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.26px;
  color: #555555;
  background: none;
  outline: none;
  margin: 10px 0px 10px 0px;
  border: 1px solid #cecece;
  padding-left: 10px;
  &:hover {
    border: 1px solid ${secondaryColor};
  }
  &:focus {
    border: 1px solid ${secondaryColor};
  }
`;
export const InputLabel = styled.p`
  font-size: 15px;
  position: absolute;
  left: 10px;
  padding: 0px 3px 0px 3px;
  color: #cecece;
  pointer-events: none;
  transition: all 200ms ease-in-out;
  ${(props) =>
    props.hovered &&
    css`
      color: ${secondaryColor};
      transform: translateY(-20px);
      z-index: 2;
      background-color: white;
      padding: 0px 2px 0px 2px;
    `}
`;


