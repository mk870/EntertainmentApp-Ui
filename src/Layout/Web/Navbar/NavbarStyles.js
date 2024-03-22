import { menuHoverColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: row;
  padding-top: 10px;
  width: 98%;
  border-bottom: 1px solid ${secondaryThemeColor};
  .web-view-user-details {
    width: 25%;
  }
`;
export const pageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  width: 100%;
  height: min-content;
`;

export const pageLink = styled.p`
  color: ${(props) => props.styles.color};
  border-bottom: 2px solid ${(props) => props.styles.borderBottom};
  background-color: ${(props) => props.styles.backGroundColor};
  margin: 5px;
  font-size: 15px;
  box-sizing:border-box;
  padding: 5px;
  border-radius:5px;
  &:hover {
    cursor: pointer;
    background-color: ${menuHoverColor};
  }
`;
