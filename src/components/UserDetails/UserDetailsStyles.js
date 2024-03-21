import styled from "styled-components";
import { mainThemeColor, secondaryThemeColor, transparentMainThemeColor } from "../../Css/Variables";

export const UserCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({isLoggedIn})=>isLoggedIn?"space-around":"end"};
  flex-direction: row;
  width: 100%;
  position: relative;
`;

export const UserCardDetailsWrapper = styled.div`
  width: ${(props) => (props.isMobileView ? "60%" : "90%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const UserIconWrapper = styled.div`
  width: ${(props) => (props.isMobileView ? "40%" : "10%")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserCardDetails = styled.div`
  width: 90%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-left: 3%;
`;
export const UserCardAbbrev = styled.div`
  font-size: 18px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserCardAbbrevText = styled.p`
  text-transform: capitalize;
  font-size: 15px;
  text-align: center;
`;
export const UserCardDetailsNameText = styled.span`
  font-size: 15px;
  font-weight: 800;
`;
export const UserCardDetailsEmailText = styled.span`
  font-size: 11px;
  font-weight: 200;
  color: ${secondaryThemeColor};
`;
export const LogInOrOutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  height: 30px;
  box-sizing: border-box;
  padding: 5px 9px;
  border-radius: 4px;
  background-color: ${mainThemeColor};
  color: ${secondaryThemeColor};
  &:hover {
    cursor: pointer;
    background-color:${transparentMainThemeColor};
  }
  @media (max-width: 400px) {
    justify-content: start;
  }
`;
export const LogInOrOutText = styled.p`
  font-size: 15px;
  margin-left: ${(props) => (props.isMobileView ? "-3px" : "10px")};
  font-weight: 400;
  margin:0;
  color: aliceblue;
`;
export const dropdown = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isMobileView ? "center" : "start")};
  padding-left: ${(props) => (props.isMobileView ? "0px" : "10px")};
  flex-direction: ${(props) => (props.isMobileView ? "column" : "row")};
  left: 0;
  right: 0;
  z-index: 50;
  height: 30px;
  border-radius: 5px;
  background-color: ${mainThemeColor};
  animation: dropDownAnimation ease 0.1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes dropDownAnimation {
    0% {
      opacity: 0;
      bottom: -29px;
    }
    100% {
      opacity: 1;
      bottom: -33px;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
export const dropDownText = styled.p`
  font-size: 15px;
  margin-left: ${(props) => (props.isMobileView ? "-3px" : "10px")};
  font-weight: 400;
`;
