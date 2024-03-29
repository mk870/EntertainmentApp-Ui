import styled from "styled-components";
import {
  backgroundColor,
  boxShadow,
  redColor,
  secondaryThemeColor,
} from "../../../../Css/Variables";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  position: relative;
  width: 200px;
  min-height: 250px;
  border-radius: 10px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 150px;
    min-height: 180px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: ${boxShadow};
  }
`;
export const poster = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background: ${backgroundColor};
  @media (max-width: 600px) {
    width: 140px;
    height: 130px;
  }
`;
export const detailsContainer = styled.div`
  display: ${(props) => (props.isInCarousel ? "none" : "flex")};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  color: ${secondaryThemeColor};
  margin-top: 7px;
  width: ${(props) => (props.isInCarousel ? "160px" : "180px")};
  @media (max-width: 600px) {
    width: 140px;
  }
`;
export const name = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 3px 0;
  color: aliceblue;
  @media (max-width: 750px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 600;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  margin-bottom: 5px;
`;

export const subContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
`;
export const detailsText = styled.p`
  font-size: 13px;
  margin: 0px 0px 0px 5px;
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
export const deleteLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  border-radius: 3px;
  background: ${redColor};
  width: 60px;
  height: 25px;
  font-size: 13px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    width: 45px;
    height:20px;
    margin-right: 0;
    border-radius: 3px;
  }
`;
export const addLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  background: ${secondaryThemeColor};
  border-radius: 100%;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 25px;
    height:25px;
    margin-right: 0;
  }
`;