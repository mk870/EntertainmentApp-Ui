import styled from "styled-components";
import {
  backgroundColor,
  mainThemeColor,
  secondaryThemeColor,
} from "../../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 98%;
  min-height: 380px;
  position: relative;
  border-radius: 15px;
  padding: 10px 0;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: ${backgroundColor};
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
`;
export const poster = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 15px;
  @media (max-width: 760px) {
    height: 280px;
    width: 280px;
  }
`;
export const detailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  @media (max-width: 410px) {
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
  background-color: ${secondaryThemeColor};
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

export const genreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;
export const genre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid aliceblue;
  border-radius: 10px;
  width: 110px;
  height: 20px;
`;
export const genreText = styled.p`
  font-size: 12px;
  color: aliceblue;
  text-align: center;
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
  background-color: ${mainThemeColor};
  height: 35px;
  border-radius: 5px;
  padding: 0 5px;
  color: aliceblue;
  &:hover {
    cursor: pointer;
  }
`;
export const addLinkText = styled.p`
  font-size: 14px;
  color: aliceblue;
  @media (max-width: 410px) {
    font-size: 13px;
  }
`;

export const trackLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  gap: 10px;
`;

export const trackLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${secondaryThemeColor};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;
