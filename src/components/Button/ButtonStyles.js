import styled from "styled-components";
import { mainThemeColor } from "../../Css/Variables";

export const ButtonField = styled.button`
  background-color: ${mainThemeColor};
  color: white;
  width: 100%;
  min-height: 30px;
  border: none;
  display: flex;
  align-items:center;
  text-align:center;
  justify-content:center;
  span{
    margin-left:1px;
  }
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  &:hover {
    background-color: #029999;
  }
`;