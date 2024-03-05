import styled from "styled-components";
import {
  backgroundColor,
  mainThemeColor,
  menuHoverColor,
} from "../../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 98%;
  min-height: 380px;
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${backgroundColor};
  border-radius: 15px;
  padding: 10px;
`;


export const contentWrapper = styled.div`
  z-index: 3;
  display: grid;
  align-items: start;
  gap: 30px;
  grid-template-columns: 0.3fr 1fr;
  width: 90%;
  @media (max-width: 760px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 430px) {
    align-items: center;
    width: 100%;
  }
`;
export const poster = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 15px;
  @media (max-width: 760px) {
    height: 280px;
    width: 280px;
  }
  @media (max-width: 430px) {
    width: 100%;
    height: 300px;
  }
`;
export const detailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  @media (max-width: 430px) {
    width: 100%;
  }
`;
export const header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const headerText = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: aliceblue;
  margin: 0;
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  margin: 10px 0;
  @media (max-width: 410px) {
    width: 100%;
  }
`;
export const link = styled.a`
  text-decoration: none;
  color: aliceblue;
`;
export const subHeaderText = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: aliceblue;
  margin: 0px 0px 0px 5px;
`;
export const subContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
`;
export const artistHeader = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: aliceblue;
  margin: 0px;
`;
export const artistText = styled.p`
  font-size: 13px;
  font-weight: 200;
  color: aliceblue;
  margin: 0px 0px 0px 5px;
  @media (max-width: 800px) {
    font-size: 11px;
  }
`;
export const artistContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
  padding: 5px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: ${menuHoverColor};
  &:hover {
    cursor: pointer;
    border: none;
    color: ${mainThemeColor};
  }
`;
export const creatorsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 4px;
  .heading {
    color: ${mainThemeColor};
    font-size: 15px;
    font-weight: 800;
  }
  .creatorText {
    color: aliceblue;
    font-size: 14px;
  }
`;


export const detailsText = styled.p`
  font-size: 14px;
  color: aliceblue;
  flex: 1;
`;

export const AddLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  min-width: 90px;
  background-color: ${menuHoverColor};
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0px 5px;
  color: aliceblue;
  &:hover {
    cursor: pointer;
    color: ${mainThemeColor};
  }
`;
export const addLinkText = styled.span`
  font-size: 14px;
  margin-left: 3px;
  color: aliceblue;
  @media (max-width: 410px) {
    font-size: 13px;
  }
`;


