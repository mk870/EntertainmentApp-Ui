import styled from "styled-components";
import { mainColor, secondaryColor } from "../CssVariables/Index";

export const ButtonField = styled.button`
  background-color: ${mainColor};
  color: white;
  width: 100%;
  margin: 15px;
  min-height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  &:hover {
    background-color: ${secondaryColor};
  }
`;
