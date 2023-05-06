import styled from "styled-components";
import {
  backgroundColor,
  secondaryThemeColor,
} from "../../../../Css/Variables";

export const SeasonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding-bottom: 20px;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const Episode = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 98%;
  gap: 15px;
  border-bottom: 1px solid ${secondaryThemeColor};
  padding: 15px 0 7px 0;
  &:hover {
    background: ${backgroundColor};
    cursor: pointer;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    width: 95%;
  }
`;
export const poster = styled.img`
  width: 180px;
  height: 160px;
  border-radius: 10px;
  margin-left: 5px;
  @media (max-width: 760px) {
    height: 150px;
    width: 150px;
  }
`;
export const EpisodeDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  color: ${secondaryThemeColor};
`;
export const headerText = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: aliceblue;
  margin: 0 0 7px 0;
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  margin: 7px 0;
`;
export const subHeaderText = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin: 0px 0px 0px 5px;
`;
export const subContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
`;
export const text = styled.p`
  font-size: 14px;
  margin: 0;
`;
