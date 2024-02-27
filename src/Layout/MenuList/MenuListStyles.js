import styled from "styled-components";
import {
  mainThemeColor,
  menuHoverColor,
  secondaryThemeColor,
} from "Css/Variables";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  width: 100%;
  height: 99%;
  padding-top: 20px;
  padding-bottom: 2px;
  color: ${secondaryThemeColor};
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
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
`;
export const MenuHeader = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export const menuItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  height: 35px;
  border-radius: 4px;
  font-size: 15px;
  box-sizing: border-box;
  padding: 3px 0px 3px 3px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${menuHoverColor};
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
`;
export const menuItemHighlight = styled.div`
  width: 3px;
  height: 20px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${mainThemeColor};
  &:hover {
    background-color: ${menuHoverColor};
  }
`;
export const header = styled.span`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: start;
  margin-left: -45px;
`;
export const divider = styled.div`
  border-bottom: 1px solid ${secondaryThemeColor};
  height: 2px;
  width: 80%;
  margin-bottom: 10px;
`;
export const logoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  font-size: 15px;
  box-sizing: border-box;
  padding: 3px 0px 3px 3px;
  width: 85%;
  height: 35px;
  font-size: 15px;
  p {
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${menuHoverColor};
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  height: 35px;
  border-radius: 4px;
  margin-bottom: 5px;
  font-size: 15px;
  box-sizing: border-box;
  padding: 3px 0px 3px 3px;
  &:hover {
    cursor: pointer;
    background-color: ${menuHoverColor};
  }
`;
