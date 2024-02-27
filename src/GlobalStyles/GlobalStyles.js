import { backgroundColor, secondaryThemeColor } from "Css/Variables";
import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    color: aliceblue;
    background-color:black;
    margin:0;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding:0;
    overflow-x:hidden;
    ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: ${backgroundColor};
  }
  ::-webkit-scrollbar-thumb {
    background: ${secondaryThemeColor};
    border-radius: 5px;
    &:hover{
      cursor: pointer;
    }
  }
  }`;
