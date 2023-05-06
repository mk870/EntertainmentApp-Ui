import styled from "styled-components";
import {
  backgroundColor,
  mainThemeColor,
  secondaryThemeColor,
} from "../../../Css/Variables";

export const MenuContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-left: 20%;
  padding-bottom: 2px;
  color: ${secondaryThemeColor};
  @media(max-width: 920px){
    padding-top: 5px;
  }
`;

export const MenuLogo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  img {
    width: 120px;
    height: 90px;
  }
  @media(max-width: 920px){
    img{
      width:80px;
      height:60px;
    }
  }
`;
export const MenuHeader = styled.p`
  font-size: 18px;
  font-weight:700;
  @media(max-width: 920px){
    font-size:16px;
  }
`;
export const menuItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height:20px;
  margin-bottom: 20px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 920px){
    height:17px;
    margin-bottom: 15px;
    font-size:14px;
  }
`;
export const menuItemText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .menu-icon {
    color: ${(props) => (props.clicked ? mainThemeColor : secondaryThemeColor)};
    font-size: 22px;
  }
  p {
    margin-left: 10px;
    color: ${(props) => (props.clicked ? "aliceblue" : secondaryThemeColor)};
  }
  @media(max-width: 920px){
    font-size:14px;
    .menu-icon{
      font-size:19px;
    }
  }
`;
export const menuItemHighlight = styled.div`
  width: 3px;
  height: 20px;
  border-top-left-radius:3px;
  border-bottom-left-radius:3px;
  background-color: ${(props) =>
    props.clicked ? mainThemeColor : backgroundColor};
  @media(max-width: 920px){
    height:17px;
  }
`;
export const header = styled.p`
  font-size: 18px;
  @media(max-width: 920px){
    font-size:15px;
  }
`;
export const divider = styled.div`
  border-bottom: 1px solid ${secondaryThemeColor};
  height: 2px;
  width: 80%;
`;
export const logoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height:20px;
  font-size: 15px;
  margin-bottom:10px;
  p {
    margin-left: 10px;
  }
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 920px){
    height:17px;
    margin-top: 20px;
    margin-bottom:10px;
  }
`;
