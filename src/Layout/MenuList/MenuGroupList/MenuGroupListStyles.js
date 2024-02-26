import { mainThemeColor, menuHoverColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  box-sizing: border-box;
  padding-left:10px;
  padding-bottom: 2px;
  color: ${secondaryThemeColor};
  border-left: 1px solid ${mainThemeColor};
  border-bottom-left-radius:20px;
  margin-bottom:5px;
  max-height: 150px;
  overflow-y:auto;
`;
export const MenuGroupItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height:35px;
  border-radius: 4px;
  font-size: 14px;
  box-sizing:border-box;
  padding:5px;
  margin-bottom:5px;
  &:hover {
    cursor: pointer;
    background-color:${menuHoverColor};
  }
  @media(max-width: 920px){
    height:17px;
    font-size:14px;
  }
`;
export const MenuGroupItemText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .menu-icon {
    color: ${(props) => (props.clicked ? mainThemeColor : secondaryThemeColor)};
    margin-top:5px;
    font-size: 20px;
  }
  p {
    margin-left: 10px;
    color: ${(props) => (props.clicked ? "aliceblue" : secondaryThemeColor)};
  }
  @media (max-width: 920px) {
    font-size: 14px;
    .menu-icon {
      font-size: 19px;
    }
  }
`;

