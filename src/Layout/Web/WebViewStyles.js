import styled from "styled-components";
import { backgroundColor, secondaryThemeColor } from "Css/Variables";

export const WebViewWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const WebViewSideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 250px;
  min-height: 100%;
  background-color: ${backgroundColor};
  position: fixed;
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
  height: 100%;
  overflow-y: auto;
  background-color: ${backgroundColor};
  position: fixed;
  left: 0;
  bottom: 0;
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
`;

export const childrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 98%;
  padding: 10px;
`;
