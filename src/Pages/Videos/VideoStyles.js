import styled from "styled-components";
import { backgroundColor, secondaryThemeColor } from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  min-height: 80vh;
  gap: 25px;
  padding-bottom: 20px;
`;

export const videoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 25px;
  width: 100%;
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
export const videoFrame = styled.iframe`
  height: 800px;
  width: 1200px;
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
export const videoTitle = styled.p`
  font-size: 15px;
  color: aliceblue;
  font-weight: 700;
  margin: 0;
  @media (max-width: 450px) {
    font-size: 13px;
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
  &:hover {
    background: ${backgroundColor};
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    border-bottom: 1px solid ${secondaryThemeColor};
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
    &:hover {
      background: ${backgroundColor};
    }
  }
`;
export const videoListItemPoster = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 15px;
  border: 1px solid ${secondaryThemeColor};
  @media (max-width: 500px) {
    width: 120px;
    height: 90px;
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
export const videoText = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  font-weight: 300;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
