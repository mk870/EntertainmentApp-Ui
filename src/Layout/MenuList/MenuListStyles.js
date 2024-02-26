import styled from "styled-components";
import {
  mainThemeColor,
  menuHoverColor,
  secondaryThemeColor,
} from "Css/Variables";

export const MenuContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height:100%;
  border:1px solid red;
  padding-top: 20px;
  padding-left: 20%;
  padding-bottom: 2px;
  color: ${secondaryThemeColor};
  //overflow-y:auto;
  @media(max-width: 920px){
    padding-top: 5px;
  }
`;

export const MenuLogo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
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
  width: 80%;
  height:35px;
  border-radius: 4px;
  font-size: 15px;
  box-sizing:border-box;
  padding:3px 0px 3px 3px;
  margin-bottom:5px;
  &:hover {
    cursor: pointer;
    background-color:${menuHoverColor};
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
  font-size: 15px;
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
  background-color: ${mainThemeColor};
  &:hover{
    background-color: ${menuHoverColor};
  }
  @media(max-width: 920px){
    height:17px;
  }
`;
export const header = styled.span`
  margin: 10px 0px;
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
  border-radius: 4px;
  font-size: 15px;
  box-sizing:border-box;
  padding:3px 0px 3px 3px;
  width: 80%;
  height:35px;
  font-size: 15px;
  p {
    margin-left: 10px;
  }
  margin-top: 15px;
  &:hover {
    cursor: pointer;
    background-color:${menuHoverColor};
  }
  @media(max-width: 920px){
    height:17px;
    margin-top: 20px;
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  height:35px;
  border-radius:4px;
  margin-bottom: 5px;
  font-size: 15px;
  box-sizing:border-box;
  padding:3px 0px 3px 3px;
  &:hover {
    cursor: pointer;
    background-color:${menuHoverColor};
  }
`
