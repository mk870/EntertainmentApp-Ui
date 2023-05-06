import styled from "styled-components";
import { backgroundColor, secondaryThemeColor } from "../../../Css/Variables";

export const WebViewWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const WebViewSideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 250px;
  min-height: 100%;
  background-color: ${backgroundColor};
  position:fixed;
  right: 0;
  padding-bottom: 20px;
`;
export const WebViewPagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: ${(props) => props.marginRight};
  margin-left: 150px;
  flex: 1;
`;
export const WebViewMenuBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 150px;
  min-height: 100%;
  background-color: ${backgroundColor};
  position:fixed;
  left:0;
  right:85% ;
  bottom: 0;
`;
export const pagesContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props)=>props.justifyContent};
  flex-direction: row;
  padding-top: 10px;
  width:98%;
  border-bottom: 1px solid ${secondaryThemeColor};
  .web-view-user-details{
    width: 25%;
  }
`
export const pageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  width:100%;
  height:min-content;
`;

export const pageLink = styled.p`
  color: ${(props) => props.styles.color};
  border-bottom: 2px solid ${(props) => props.styles.borderBottom};
  margin: 10px;
  font-size: 15px;
  padding-bottom:2px;
  &:hover{
    cursor: pointer;
  }
`;
export const childrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 98%;
  padding: 10px;
  //min-height:100vh;
`
