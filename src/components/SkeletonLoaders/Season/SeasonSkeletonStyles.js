import styled from "styled-components";
import { skeletonAnimation } from "../../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  padding: 15px 0 7px 0;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 95%;
  }
`;
export const poster = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 10px;
  margin-left: 5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
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
`;
export const EpisodeDetailsText = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  height: 15px;
  width: 100px;
  margin: 0 0 7px 0;
  border-radius: 5px;
  @media (max-width: 760px) {
    height: 10px;
  }
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

export const subText = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  height: 15px;
  width: 60px;
  margin: 0 0 7px 0;
  border-radius: 5px;
  @media (max-width: 760px) {
    height: 10px;
  }
`;
export const text = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  height: 15px;
  width: 100%;
  margin: 0 0 7px 0;
  border-radius: 5px;
  @media (max-width: 760px) {
    height: 10px;
  }
`;

export const lastText = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  height: 15px;
  width: 70%;
  margin: 0 0 7px 0;
  border-radius: 5px;
  @media (max-width: 760px) {
    height: 10px;
  }
`;
