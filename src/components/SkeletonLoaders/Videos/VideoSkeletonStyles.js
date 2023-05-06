import styled from "styled-components";
import { skeletonAnimation } from "../../../Css/Variables";

export const videoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 25px;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const videoFrameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1300px) {
    width: 100%;
    align-items: center;
    justify-content: start;
  }
`;
export const videoFrame = styled.div`
  height: 800px;
  width: 1200px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media (max-width: 1900px) {
    width: 900px;
    height: 700px;
  }
  @media (max-width: 1600px) {
    width: 700px;
    height: 550px;
  }
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 850px) {
    height: 400px;
  }
  @media (max-width: 600px) {
    height: 300px;
  }
  @media (max-width: 450px) {
    height: 250px;
  }
`;
export const videoDescription = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  width: 1200px;
  @media (max-width: 1900px) {
    width: 900px;
  }
  @media (max-width: 1600px) {
    width: 700px;
  }
  @media (max-width: 1300px) {
    width: 90%;
  }
`;
export const videoTitle = styled.div`
  height: 15px;
  margin: 0 0 7px 0;
  border-radius: 5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 100px;
  @media (max-width: 500px) {
    height: 10px;
  }
`;
export const videoList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;
export const videoListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  gap: 10px;
  padding: 7px 0;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }
`;
export const videoListItemPoster = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 15px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media (max-width: 500px) {
    width: 180px;
    height: 140px;
  }
`;
export const videoListItemDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
  gap: 7px;
`;
export const videoText = styled.div`
  height: 15px;
  margin: 0 0 7px 0;
  border-radius: 5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 100%;
  @media (max-width: 500px) {
    height: 10px;
  }
`;
export const videoLastText = styled.div`
  height: 15px;
  margin: 0 0 7px 0;
  border-radius: 5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 70%;
  @media (max-width: 500px) {
    height: 10px;
  }
`;
